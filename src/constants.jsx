import Projects from "./components/Projects";

export const contractAddress = "0xf226535b3820db29095f535f858f615e571e076a";
export const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "period",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "skilledLearned",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "institute",
				"type": "string"
			}
		],
		"name": "addEducation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "details",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "repoLink",
				"type": "string"
			}
		],
		"name": "addProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "duration",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "skillsGained",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "organization",
				"type": "string"
			}
		],
		"name": "addWorkExperience",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "supportMe",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newBio",
				"type": "string"
			}
		],
		"name": "updateBio",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newCVLink",
				"type": "string"
			}
		],
		"name": "updateCV",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "period",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "skilledLearned",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "institute",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "eduIndex",
				"type": "uint256"
			}
		],
		"name": "updateEducation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newImageUrl",
				"type": "string"
			}
		],
		"name": "updateImage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "details",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "repoLink",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "projectIndex",
				"type": "uint256"
			}
		],
		"name": "updateProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "duration",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "skillsGained",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "organization",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "workIndex",
				"type": "uint256"
			}
		],
		"name": "updateWorkExperience",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bio",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cvLink",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEducation",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "eduId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "period",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "qualification",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "skilledLearned",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "institute",
						"type": "string"
					}
				],
				"internalType": "struct MyPortfolio.EducationInfo[3]",
				"name": "",
				"type": "tuple[3]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProjects",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "projectId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "details",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imageUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "repoLink",
						"type": "string"
					}
				],
				"internalType": "struct MyPortfolio.ProjectInfo[3]",
				"name": "",
				"type": "tuple[3]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWorkExperience",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "workId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "duration",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "position",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "skillsGained",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "organization",
						"type": "string"
					}
				],
				"internalType": "struct MyPortfolio.WorkInfo[3]",
				"name": "",
				"type": "tuple[3]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "myEducation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "eduId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "period",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "skilledLearned",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "institute",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "myExperiences",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "workId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "duration",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "skillsGained",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "organization",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "myProjects",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "details",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "repoLink",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "profileImage",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const sampleData = {
    profileImage : "https://scarlet-rapid-coyote-98.mypinata.cloud/ipfs/bafkreidwu6446xdsyot3gnxulj4dmfzy6zlksofvji7ptm5vc46h7a6ofy",
    bio: "I am specialize in building | Smart Contract | dApp | DAO | DeFi",


    projects: [
        {
            id: 0,
            title: "Decentralize Marketplace",
            details: "Voting dApp",
            imageUrl: "https://scarlet-rapid-coyote-98.mypinata.cloud/ipfs/bafkreihtuzmewmt6krrncydako5fp2kdiaggxfdit5f22cw2hzxa4axomi",
            repoLink: "https://arif039.github.io/Voting_dApp/",
        },

		{
            id: 1,
            title: "Decentralize Marketplace",
            details: "ToDo dApp",
            imageUrl: "https://scarlet-rapid-coyote-98.mypinata.cloud/ipfs/bafkreidqvs3in5didrbayrukk63m4vonynuzghpmnizpimxoadvjatkfmm",
            repoLink: "https://arif039.github.io/todo-app/",
        },

		{
            id: 2,
            title: "Decentralize Marketplace",
            details: "Supply-Chain dApp",
            imageUrl: "https://scarlet-rapid-coyote-98.mypinata.cloud/ipfs/bafkreiasibo72t7676kbebwqbyjkijbja7fcl5buoegyblyxgxbh2k6rqe",
            repoLink: "https://arif039.github.io/simple_supply_chain/",
        }
    ],

	education: [
		{
			id: 0,
			period: "2018-20",
			qualification: "BSc in EEE",
			skillsLearned: "Python, JS, Blockchain",
			institute: "MIT",
		},

		{
			id: 1,
			period: "2018-20",
			qualification: "BSc in EEE",
			skillsLearned: "Python, JS, Blockchain",
			institute: "MIT",
		},

		{
			id: 2,
			period: "2018-20",
			qualification: "BSc in EEE",
			skillsLearned: "Python, JS, Blockchain",
			institute: "MIT",
		}
	],

	experience: [
		{
			id: 0,
			duration: "2021-23",
			position: "Blockchain Developer",
			skillsGained: "Blockchain",
			organization: "NonAcademy",
		},

		{
			id: 1,
			duration: "2021-23",
			position: "Blockchain Developer",
			skillsGained: "Blockchain",
			organization: "NonAcademy",
		},

		{
			id: 2,
			duration: "2021-23",
			position: "Blockchain Developer",
			skillsGained: "Blockchain",
			organization: "NonAcademy",
		}
	]
}