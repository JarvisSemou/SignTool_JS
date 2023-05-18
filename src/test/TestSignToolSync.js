import { SignTool, SignType } from "../main/js/SignTool.js"

let testId = 1

function deliver(info){
    console.info(`(${testId})------------------------------- ${info?info:''} -------------------------------`)
    testId++
}


deliver(`SignType.Department_Id_And_Token without timestamp`)
let sign = SignTool.genSignSync(SignType.Department_Id_And_Token, {
    departmentId: "departmentId",
    token: "aaaaaaaaaa"
})


deliver(`SignType.Department_Id_And_Token with timestamp`)
sign = SignTool.genSignSync(SignType.Department_Id_And_Token, {
    departmentId: "departmentId",
    token: "aaaaaaaaaa",
    timestamp: "timestamp"
})


deliver(`SignType.Enterprise_Id_And_Token without timestamp`)
sign = SignTool.genSignSync(SignType.Enterprise_Id_And_Token, {
    enterpriseId: "enterpriseId",
    token: "aaaaaaaaaa"
})


deliver(`SignType.Enterprise_Id_And_Token with timestamp`)
sign = SignTool.genSignSync(SignType.Enterprise_Id_And_Token, {
    enterpriseId: "enterpriseId",
    token: "aaaaaaaaaa",
    timestamp: "timestamp"
})


deliver(`SignType.Department_Id_And_CrmId_And_Password without timestamp`)
sign = SignTool.genSignSync(SignType.Department_Id_And_CrmId_And_Password, {
    departmentId: "departmentId",
    crmId: "crmId",
    password: "password"
})


deliver(`SignType.Department_Id_And_CrmId_And_Password with timestamp`)
sign = SignTool.genSignSync(SignType.Department_Id_And_CrmId_And_Password, {
    departmentId: "departmentId",
    crmId: "crmId",
    password: "password",
    timestamp: "timestamp"
})


deliver(`SignType.Enterprise_Id_And_CrmId_And_Password without timestamp`)
sign = SignTool.genSignSync(SignType.Enterprise_Id_And_CrmId_And_Password, {
    enterpriseId: "enterpriseId",
    crmId: "crmId",
    password: "password"
})


deliver(`SignType.Enterprise_Id_And_CrmId_And_Password with timestamp`)
sign = SignTool.genSignSync(SignType.Enterprise_Id_And_CrmId_And_Password, {
    enterpriseId: "enterpriseId",
    crmId: "crmId",
    password: "password",
    timestamp: "timestamp"
})


deliver(`SignType.Department_Id_And_Cno_And_AgentToken without timestamp`)
sign = SignTool.genSignSync(SignType.Department_Id_And_Cno_And_AgentToken, {
    departmentId: "departmentId",
    cno: "cno",
    agentToken: "agentToken"
})


deliver(`SignType.Department_Id_And_Cno_And_AgentToken with timestamp`)
sign = SignTool.genSignSync(SignType.Department_Id_And_Cno_And_AgentToken, {
    departmentId: "departmentId",
    cno: "cno",
    agentToken: "agentToken",
    timestamp: "timestamp"
})


deliver(`SignType.Enterprise_Id_And_Cno_And_AgentToken without timestamp`)
sign = SignTool.genSignSync(SignType.Enterprise_Id_And_Cno_And_AgentToken, {
    enterpriseId: "enterpriseId",
    cno: "cno",
    agentToken: "agentToken",
})


deliver(`SignType.Enterprise_Id_And_Cno_And_AgentToken with timestamp`)
sign = SignTool.genSignSync(SignType.Enterprise_Id_And_Cno_And_AgentToken, {
    enterpriseId: "enterpriseId",
    cno: "cno",
    agentToken: "agentToken",
    timestamp: "timestamp"
})