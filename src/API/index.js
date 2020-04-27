import axios from "axios";
import * as Constants from "../Constants";

const baseUrl = "http://covidtracking.com/api/us/";

const getDailyData = async () => {
    const dailyDataUrl = `${baseUrl}/daily`
    try {

        const { data } = await axios.get(dailyDataUrl);
        return data;
    }
    catch (e) { console.log(e) }
}


const getCategorySummar = (summary, category) => {
    const data = {
        info: []
    };

    switch (category) {
        case Constants.defaultCategory:
            data = {
                info: [
                    { subCategory: Constants.recoverySubcategory.recovery, value: summary.recovered, description: Constants.recoveredMessage },
                    { subCategory: Constants.recoverySubcategory.death, value: summary.death, description: Constants.deathMessage }]
            };
            break;

        case Constants.hospitalisation:
            data = {
                info: [
                    { subCategory: Constants.recoverySubcategory.recovery, value: summary.recovered, description: Constants.recoveredMessage },
                    { subCategory: Constants.recoverySubcategory.death, value: summary.death, description: Constants.deathMessage }]
            };
            break;
        case Constants.defaultCategory:
            data = {
                info: [
                    { subCategory: Constants.recoverySubcategory.recovery, value: summary.recovered, description: Constants.recoveredMessage },
                    { subCategory: Constants.recoverySubcategory.death, value: summary.death, description: Constants.deathMessage }]
            };
            break;
        case Constants.defaultCategory:
            data = {
                info: [
                    { subCategory: Constants.recoverySubcategory.recovery, value: summary.recovered, description: Constants.recoveredMessage },
                    { subCategory: Constants.recoverySubcategory.death, value: summary.death, description: Constants.deathMessage }]
            };
            break;
        case Constants.defaultCategory:
            data = {
                info: [
                    { subCategory: Constants.recoverySubcategory.recovery, value: summary.recovered, description: Constants.recoveredMessage },
                    { subCategory: Constants.recoverySubcategory.death, value: summary.death, description: Constants.deathMessage }]
            };
            break;
    }
}


export { getDailyData } 