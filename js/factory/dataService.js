//create a factory for questions and facts that can be used by different controllers
//immediately invoking function
(function () {
    angular
  .module("resumeList")
  .factory("dataService", DataService);

    function DataService() {

        var DataObj = {
            educationList: educationList,
            experiencesList: experiencesList,
            aboutMe: aboutMe
        };
        return DataObj;
    }

    //about me content
    var aboutMe = [
        {
            description: "Programming enthusiast with the aptitude for working and learning in the technological field, pursuing Masters of Software Engineering at Villanova University. I have gained valuable experience as a full stack developer working with diverse clients and technologies such as ASP.NET (MVC), Java, PHP, JavaScript, jQuery, HTML, CSS, JSON, web services, Database Design, Git, GitHub, SQL Server, etc. Actively seeking Internship/full time. Graduating Dec 2019."
        }
    ]
    //list of education
    var educationList = [
        {
            university: "Villanova University",
            location: "Villanova, PA",
            course: "Master of Science in Software Engineering",
            date: "Expected Dec 2019",
            gpa: "3.89/4.0",
            scholarship: "Graduate Teaching Assistantship"
        },
        {
            university: "St. Xavier’s College, Tribhuvan University",
            location: "Kathmandu, Nepal",
            course: "Bachelor of Science in Computer Science and Information Technology",
            date: "Oct 2011 – Dec 2015",
            gpa: "4.0/4.0",
            scholarship: "Merit-based Scholarship"
        }
    ]

    //list of experiences
    var experiencesList = [
        {
            role: "Graduate Assistant",
            company: "Department of Computing Sciences",
            location: "Villanova, PA",
            date: "Jan 2018 – Present",
            activities: [
                {
                activity: "Assist professors in grading and managing classes of approximately 65 students per semester."
                },
                {
                activity: "Tutor students in Algorithms and Data Structures, Database, and Java."
                },
                {
                activity: "Upgrade different departmental sites using PHP, MySQL, JavaScript, HTML, CSS."
                }
            ]
        },
        {
            role: "R&D Intern",
            company: "TA Instruments, Waters Corporation",
            location: "Newcastle, DE",
            date: "May 2019 – Aug 2019",
            activities: [
                {
                activity: "Installed, deployed and configured Docker containers for AWS IoT Greengrass Core, Confluent Platform images, MemSQL database, and proprietary web server/application."
                },
                {
                activity: "Implemented and configured the Confluent Kafka MQTT source connector to translate data coming from instruments into Kafka topics to be passed through the data pipeline."
                },
                {
                activity: "Worked cross-functionally with FW/platform and SW teams to aggregate instrument signal descriptors and signal unit type descriptors; created and populated MemSQL database tables with aggregated data."
                },
                {
                activity: "Implemented, configured, and tested the MemSQL Kafka pipeline so that data coming from Kafka could flow through a transform prior to being written to the relevant database tables."
                },
                {
                activity: "Installed and configured Tableau to be able to query the MemSQL database to prepare data for business intelligence dashboard consumption. "
                },
                {
                activity: "Researched, enhanced, and documented the usage model and all steps taken for configuring all the technologies involved in the project prototypes; documentation within team’s Atlassian Confluence collaboration software. "
                },
                {
                 activity: "Actively participated in team meetings and in vendor meetings and training sessions."
                }
            ]
        },
        {
            role: "Software Engineer/IT Consultant",
            company: " National Planning Commission (NPC), Government of Nepal",
            location: "Kathmandu, Nepal",
            date: "Sept 2017 – Dec 2017",
            activities: [
                {
                activity: "Collaborated with NPC team for upgrading Project Performance Information System (PPIS) and"
                +" provided maintenance, support, and training to users of different ministries."
                },
                {
                activity: "Redesigned UI layouts to enhance user experience and improved user manual documentation."
                },
                {
                activity: "Achieved goal of involving all 22 ministries to use the PPIS system."
                },
                {
                activity: "Initiated Agile methodologies in the team for responding to changes and gathering feedbacks."
                }
            ]
        },
        {
            role: "Technical Support Analyst",
            company: "Department of Civil Registration (DOCR), Ministry of Federal Affairs"
            +" and Local Development, Government of Nepal",
            location: "Kathmandu, Nepal",
            date: "Mar 2017 – Sept 2017",
            activities: [
                {
                activity: "Implemented Vital Event Registration and Social Protection Allowance Management Information"
                +" System (VERSP-MIS) with DOCR team on more than 800 local bodies of government."
                },
                {
                activity: "Led team of 5 people to assist design, development, and testing (unit, integrated)."
                },
                {
                activity: "Provided remote support to 15 users per day on average solving their concerns and complaints."
                }
            ]
        },
        {
            role: "Software Engineer/Database Assistant",
            company: "Udan Software Pvt. Ltd., Kathmandu, Nepal",
            location: "Villanova, PA",
            date: "Jul 2014 – Mar 2017",
            activities: [
                {
                activity: "Database Migration: Decreased workload of migrating UN’s Micro-Enterprise Development"
                +" records from Access to MS SQL database by 5% with Microsoft SSMA tool."
                },
                {
                activity: "Polyclinic Management: Led team of 6 developers to build CMS, dynamic menu and report"+
                " generating modules using C#, .Net, JavaScript, SQL Server, Web API, JSON, Git, GitHub. "
                },
                {
                activity: "V-Profile: Designed and implemented a module to grant permissions to different level of users"+
                " and a module to generate reports using .NET, Crystal Report, JavaScript, SQL Server."
                }
            ]
        }
    ]  
})();
