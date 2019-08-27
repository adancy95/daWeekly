const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testArtifactSchema = new Schema({
  ticketNumber: {
    type: String,
    required: true
  },
  issueSummary: {
    type: String,
    required: true
  },
  jiraLink: {
    type: String,
    required: true
  },
  testEnvironment: {
    type: String,
    enum: ["Development", "QA", "Staging", "Production"]
  },
  issueType: String,
  sprint: String,
  tester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  testStatus: {
    type: String,
    enum: ["Accepted", "Rejected", "In Testing", "Blocked"]
  },
  testCases: [String],
  storyDescription: String,
  scenario: {
    name: String,
    evidence: [
      {
        imageDescription: String,
        imageURL: String
      }
    ]
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
},
{
  timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
})


const TestArtifact = mongoose.model('TestArtifact', testArtifactSchema);
module.exports = TestArtifact;