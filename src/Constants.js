const defaultCategory = "Recovery";
const hospitalisation = "Hospitalization";
const serious = "Serious";
const critical = "Critical";
const tests = "Tests";

const recoverySubcategory = {
    death: "Death",
    recovery: "Recovery"
};

const hospitalisationSubCategory = {
    hospitalized: "Hospitalized",
    infected: "Infected"
};

const seriousSubCategory = {
    hospitalized: "Hospitalized",
    icu: "ICU"
};

const criticalSubCategory = {
    hospitalized: "Hospitalized",
    ventilator: "Ventilator"
};

const testsSubCategory = {
    tested: "Tested",
    positive: "Positive",
    negative: "Negative"
};

const recoveredMessage = "Number of recovered cases of COVID-19";
const deathMessage = "Number of deaths from COVID-19";
const testedPositiveMessage = "Number of people tested positive of COVID-19";
const testedNegativeMessage = "Number of people tested negative of COVID-19";
const hospitalizedMessage = "Number of people hospitalized from COVID-19";
const ventilatorMessage = "Number of people on ventilator from COVID-19";
const icuMessage = "Number of people in ICU from COVID-19";

export {
    defaultCategory, hospitalisation, critical, tests, recoveredMessage,
    deathMessage, testedPositiveMessage, testedNegativeMessage, hospitalizedMessage, ventilatorMessage, icuMessage,
    recoverySubcategory, hospitalisationSubCategory, seriousSubCategory, criticalSubCategory, testsSubCategory
};
