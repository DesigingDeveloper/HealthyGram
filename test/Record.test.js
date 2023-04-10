/* eslint-disable jest/valid-expect */
const { expect } = require("chai"); 
const { ethers } = require("hardhat"); 
describe("Records", function () { 
  let accounts; 
  let record; 
  beforeEach(async function () { 
    accounts = await ethers.getSigners(); 
    const Record = await ethers.getContractFactory("Record"); 
    record = await Record.deploy(); 
    await record.deployed(); 
  }); 
  it("can deploy record contract", async function () { 
    expect(record.address).to.not.equal(0); 
  }); 
  it("can add record", async function () { 
    await record.setDetails( 
      "01107020345", 
      "John", 
      "0123456789", 
      "Male", 
      "07/22/2222", 
      "183", 
      "75", 
      "O", 
      "Food", 
      "Antidepressants" 
    ); 
  }); 
  it("can retrieve all record address", async function () { 
    await record.setDetails( 
      "01107020345", 
      "John", 
      "0123456789", 
      "Male", 
      "07/22/2222", 
      "183", 
      "75", 
      "O", 
      "Food", 
      "Antidepressants" 
    ); 
    const allRecords = await record.getPatients(); 
    const owner = await record.owner(); 
    expect(allRecords[0]).to.equal(owner); 
  }); 
  it("can search for a patient", async function () { 
    await record.setDetails( 
      "01107020345", 
      "John", 
      "0123456789", 
      "Male", 
      "07/22/2222", 
      "183", 
      "75", 
      "O", 
      "Food", 
      "Antidepressants" 
    ); 
    const owner = await record.owner(); 
    const names = await record.searchPatientDemographic(owner); 
    expect(names[0]).to.equal("01107020345"); 
  }); 
  it("can create patient using multiple accounts", async function () { 
    await record 
      .connect(accounts[0]) 
      .setDetails( 
        "01107020345", 
        "John", 
        "0123456789", 
        "Male", 
        "07/22/2222", 
        "183", 
        "75", 
        "O", 
        "Food", 
        "Antidepressants" 
      ); 
    await record 
      .connect(accounts[1]) 
      .setDetails( 
        "01107020345", 
        "John", 
        "0123456789", 
        "Male", 
        "07/22/2222", 
        "183", 
        "75", 
        "O", 
        "Food", 
        "Antidepressants" 
      ); 
    const allRecords = await record.getPatients(); 
    expect(allRecords).to.include.members([ 
      accounts[0].address, 
      accounts[1].address, 
    ]); 
  }); 
  it("can create appointment using doctor account", async function () { 
    await record.setDetails( 
      "01107020345", 
      "Bane Gateson", 
      "0123456789", 
      "Male", 
      "07/22/2222", 
      "183", 
      "75", 
      "O", 
      "Food", 
      "Antidepressants" 
    ); 
    await record.setDoctor( 
      "01107020345", 
      "Bane Gateson", 
      "0123456789", 
      "Male", 
      "07/22/2222", 
      "Doctorate", 
      "Virology" 
    ); 
    await record.setAppointment( 
      record.address, 
      "07/07/2022", 
      "11:50pm", 
      "Amoxicillin", 
      "Requires observation", 
      "Skin Infection", 
      "Pending" 
    ); 
    const appointment = await record.searchAppointment(record.address); 
    expect(appointment[0]).to.not.equal(null); 
  }); 
  it("can count number of records created by patient", async function () { 
    await record.setDetails( 
      "01107020345", 
      "John", 
      "0123456789", 
      "Male", 
      "07/22/2222", 
      "183", 
      "75", 
      "O", 
      "Food", 
      "Antidepressants" 
    ); 
    const patientCount = await record.getPatientCount(); 
    expect(patientCount).to.equal(1); 
  }); 
});
