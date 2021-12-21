const SiteText = require("./Model")
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const ConnectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    if (conn) {
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } else {
        console.log("Error connecting to db")
    }
}
ConnectDB()

const text = {
    headerMenu1: "ABOUT US",
    headerMenu2: "PRICING",
    headerMenu3: "TESTIMONIALS",
    jumbotronText1: "AFFORDABLE, INTERACTIVE & FRIENDLY",
    jumbotronText2part1: "We're",
    jumbotronText2part2: "rethinking education -",
    jumbotronText2part3: "to",
    jumbotronText3part1: "Meet you where you are & help you reach where you dream to be.",
    jumbotronText3part2: "Learn how to communicate with databases using a standard management language.",
    pricingHeader: "PRICING",
    pricingText1: "Available Courses",
    sqlCard1Title: "BASIC",
    sqlCard1Price: "Free",
    sqlCard1Description: "Learn how to use SQL to query data stored in a database",
    sqlCard1Time: "In only 45 minutes",
    sqlCard2Title: "INTERMEDIATE",
    sqlCard2Price: "₦2,000",
    sqlCard2Description: "Learn powerful functions for performing complex database operations with ease",
    sqlCard2Time: "In 1 and a half hours",
    sqlCard3Title: "ADVANCED",
    sqlCard3Price: "₦5,000",
    sqlCard3Description: "Expand your SQL skills by manipulating databases with multiple related tables",
    sqlCard3Time: "In only 3 hours",
    excelText1 : "Coming Soon",
    excelText2 : "Join our slack community to get up to date",
    joinOurCommunityText1 : "JOIN US",
    joinOurCommunityText2 : "Slack Community",
    joinOurCommunityText3part1 : "Join our slack community to collaborate with other people",
    joinOurCommunityText3part2 : "and get answers to your SQL questions.",
    aboutUsText1 : "WHO ARE WE",
    aboutUsText2 : "About Us",
    aboutUsText3 : "Our tutors have more than 10 years of experience teaching SQL and have trained 2,000 people from basic to advanced.",
    experienceText1 : "10yrs",
    experienceText2 : "Experience teaching people SQL",
    trainedText1 : "2,000",
    trainedText2 : "Nuber of people trained",
    testimonialText1 : "FEEDBACK",
    testimonialText2 : "Testimonials",
    testimonialCard1Text : "“The platform has a slick experience, that was so easy to use. I feel so less stressed as i know we are doing everything by the book.”",
    testimonialCard1Name : "Kirko Bangs",
    testimonialCard1Position : "Founder at Bangs INC",
    testimonialCard2Text : "“The platform has a slick experience, that was so easy to use. I feel so less stressed as i know we are doing everything by the book.”",
    testimonialCard2Name : "Kirko Bangs",
    testimonialCard2Position : "Founder at Bangs INC",
    testimonialCard3Text : "“The platform has a slick experience, that was so easy to use. I feel so less stressed as i know we are doing everything by the book.”",
    testimonialCard3Name : "Kirko Bangs",
    testimonialCard3Position : "Founder at Bangs INC"
}

const seedData = async (data) => {
    const newdata = await  SiteText.create({
        site : "gloed.co",
        data : data
    })
    console.log(newdata)
}

seedData(text)