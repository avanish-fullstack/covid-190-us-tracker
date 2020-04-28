import axios from "axios";
import * as Constants from "../Constants";

const baseUrl = "http://covidtracking.com/api/us/";

const getDailyData = async () => {
    const dailyDataUrl = `${baseUrl}/daily`
    try {

        const { data } = await axios.get(dailyDataUrl);
        return data;
    }
    catch (e) {
        console.log(e)
    }
}

const getCategorySummary = (summary, category) => {
    let data = [];

    switch (category) {
        case Constants.defaultCategory:
            data =
                [
                    { subCategory: Constants.recoverySubcategory.recovery, value: summary.recovered, description: Constants.recoveredMessage },
                    { subCategory: Constants.recoverySubcategory.death, value: summary.death, description: Constants.deathMessage }]
            break;

        case Constants.hospitalisation:
            data = [
                { subCategory: Constants.hospitalisationSubCategory.hospitalized, value: summary.hospitalizedCurrently, description: Constants.hospitalizedMessage },
                { subCategory: Constants.hospitalisationSubCategory.infected, value: summary.positive, description: Constants.testedPositiveMessage }];
            break;
        case Constants.serious:
            data =
                [
                    { subCategory: Constants.seriousSubCategory.hospitalized, value: summary.hospitalizedCurrently, description: Constants.hospitalizedMessage },
                    { subCategory: Constants.seriousSubCategory.icu, value: summary.inIcuCurrently, description: Constants.icuMessage }];

            break;
        case Constants.critical:
            data =
                [
                    { subCategory: Constants.criticalSubCategory.hospitalized, value: summary.hospitalizedCurrently, description: Constants.hospitalizedMessage },
                    { subCategory: Constants.criticalSubCategory.ventilator, value: summary.onVentilatorCurrently, description: Constants.icuMessage }];

            break;
        case Constants.tests:
            data =
                [
                    { subCategory: Constants.testsSubCategory.tested, value: summary.total, description: Constants.totalTestedMessage },
                    { subCategory: Constants.testsSubCategory.positive, value: summary.positive, description: Constants.testedPositiveMessage },
                    { subCategory: Constants.testsSubCategory.negative, value: summary.negative, description: Constants.testedNegativeMessage }
                ];
            break;
    }
    return data;
}

export { getDailyData, getCategorySummary } 