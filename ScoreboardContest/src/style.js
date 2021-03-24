const paddingVal = 3;
let leng = 61 / 10;
leng *= 1.202;
let s = leng.toString();

export const Dark = {
    styleContestName: {
        fontWeight: "bold",
        fontSize: "17px",
        color: "white",
        backgroundColor: "#262626",
        paddingLeft: "10px",
    },
    styleTrophy: {
        backgroundColor: "#262626",
        width: "25px",
    },
    styleName: {
        textAlign: "left",
        fontSize: "14px",
        fontWeight: "bold",
        backgroundColor: "#262626",
        color: "white",
        paddingTop: paddingVal + "px",
        paddingBottom: paddingVal + "px",
        paddingRight: "20px",
        paddingLeft: "10px",
    },
    styleNamePending: {
        textAlign: "left",
        fontSize: "14px",
        fontWeight: "bold",
        backgroundColor: "#537acd",
        paddingTop: paddingVal + "px",
        paddingBottom: paddingVal + "px",
        paddingRight: "20px",
        paddingLeft: "10px",
        color: "white"
    },
    styleScore: {
        textAlign: "center",
        fontSize: "13px",
        color: "#00a200",
        fontWeight: "bold",
        backgroundColor: "#262626",
        paddingLeft: "10px",
        paddingRight: "10px",
    },
    styleRank: {
        textAlign: "center",
        fontSize: "13px",
        fontWeight: "bold",
        backgroundColor: "#262626",
        paddingLeft: "10px",
        paddingRight: "10px",
        color: "white"
    },
    styleQuestion: {
        backgroundColor: "#bfd126",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        paddingTop: paddingVal + "px",
        paddingBottom: paddingVal + "px",
        textAlign: "center"
    },
    styleQuestionPending: {
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: paddingVal + "px",
        paddingBottom: paddingVal + "px",
        backgroundColor: "#537acd"
    },
    styleUnScore: {
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "#262626",
        paddingTop: paddingVal + "px",
        paddingBottom: paddingVal + "px",
        color: "white"
    },
    styleWrongAnswer: {
        textAlign: "center",
        fontSize: "17px",
        fontWeight: "bold",
        paddingTop: paddingVal + "px",
        paddingBottom: paddingVal + "px",
        backgroundColor: "#aa0000",
        color: "white"
    },
    styleCorrect: {
        textAlign: "center",
        fontSize: "17px",
        fontWeight: "bold",
        paddingTop: paddingVal + "px",
        paddingBottom: paddingVal + "px",
        backgroundColor: "#00a200",
        color: "white"
    },
    styleProblem: {
        backgroundColor: "#262626",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "12px",
        border: "1px",
        paddingTop: "10px",
        paddingBottom: "20px",
        color: "white"
    },
    styleSubProblem: {
        backgroundColor: "#262626",
        textAlign: "center",
        fontSize: "13px",
        fontWeight: "bold",
        width: s + "%",
        border: "1px",
        color: "white"
    },
}