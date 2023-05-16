


const LogTag = "Clink2 Authenticate Util"

const N = "\n"

/** 鉴权签名类型 */
const SignType = {

    /** 
     * 部门 Id + 部门 token 签名. 
     * 
     * 签名计算方式: md5(departmentId + timestamp + token)
     */
    Department_Id_And_Token: "1",


    /** 
     * 呼叫中心 Id + 部门 token 签名.
     * 
     * 签名计算方式: md5(enterpriseId + timestamp + token)
     */
    Enterprise_Id_And_Token: "2",


    /** 
     * 部门 Id + 员工 Id(crmId) + 员工密码签名 
     * 
     * 签名计算方式: md5(departmentId + crmId + timestamp + md5(password))
     */
    Department_Id_And_CrmId_And_Password: "3",


    /** 
     * 呼叫中心 Id + 员工 Id(crmId) + 员工密码签名 
     * 
     * 签名计算方式: md5(enterpriseId + crmId + timestamp + md5(password))
     */
    Enterprise_Id_And_CrmId_And_Password: "4",


    /** 
     * 部门 Id + 座席号(cno) + 临时登录令口令(agentToken) 
     * 
     * 签名计算方式: md5(departmentId + cno + timestamp + agentToken)
     */
    Department_Id_And_Cno_And_AgentToken: "5",


    /** 
     * 呼叫中心 Id + 座席号(cno) + 临时登录令口令(agentToken) 
     * 
     * 签名计算方式: md5(enterpriseId + cno + timestamp + agentToken)
     */
    Enterprise_Id_And_Cno_And_AgentToken: "6",
}


