import crypto_js from 'crypto-js'
const { MD5 } = crypto_js


const LogTag = "CTICloud Authenticate Util"

const N = "\n"

/** 鉴权签名类型 */
const SignType = {

    /** 
     * 部门 Id + 部门 token 签名. 
     * 
     * 签名计算方式: md5(departmentId + timestamp + token)
     * 
     * 注: timestamp 为可选参数, 如果不传, 则默认为当前时间戳
     */
    Department_Id_And_Token: "1",


    /** 
     * 呼叫中心 Id + 部门 token 签名.
     * 
     * 签名计算方式: md5(enterpriseId + timestamp + token)
     * 
     * 注: timestamp 为可选参数, 如果不传, 则默认为当前时间戳
     */
    Enterprise_Id_And_Token: "2",


    /** 
     * 部门 Id + 员工 Id(crmId) + 员工密码签名 
     * 
     * 签名计算方式: md5(departmentId + crmId + timestamp + md5(password))
     * 
     * 注: timestamp 为可选参数, 如果不传, 则默认为当前时间戳
     */
    Department_Id_And_CrmId_And_Password: "3",


    /** 
     * 呼叫中心 Id + 员工 Id(crmId) + 员工密码签名 
     * 
     * 签名计算方式: md5(enterpriseId + crmId + timestamp + md5(password))
     * 
     * 注: timestamp 为可选参数, 如果不传, 则默认为当前时间戳
     */
    Enterprise_Id_And_CrmId_And_Password: "4",


    /** 
     * 部门 Id + 座席号(cno) + 临时登录令口令(agentToken) 
     * 
     * 签名计算方式: md5(departmentId + cno + timestamp + agentToken)
     * 
     * 注: timestamp 为可选参数, 如果不传, 则默认为当前时间戳
     */
    Department_Id_And_Cno_And_AgentToken: "5",


    /** 
     * 呼叫中心 Id + 座席号(cno) + 临时登录令口令(agentToken) 
     * 
     * 签名计算方式: md5(enterpriseId + cno + timestamp + agentToken)
     * 
     * 注: timestamp 为可选参数, 如果不传, 则默认为当前时间戳
     */
    Enterprise_Id_And_Cno_And_AgentToken: "6",
}

/** CTICloud 鉴权工具 */
const SignTool = {

    /**
     * 以异步方式生成签名
     * 
     * @param {SignType} signType 签名类型, 参考 SignType
     * @param {Object} params 
     */
    async genSign(signType, params) {
        return judgeSignType(signType, params)
    },

    /**
     * 以同步方式生成签名
     * 
     * @param {SignType} signType 签名类型, 参考 SignType
     * @param {Object} params 
     */
    genSignSync(signType, params) {
        return judgeSignType(signType, params)
    }
}

function judgeSignType(signType, params) {

    console.info(`${N
        }${LogTag}${N
        }SignType: ${signType}${N
        }Params: ${JSON.stringify(params)}
    `)

    if (!params) {
        throw new Error("Params is null.")
    }

    if (signType == SignType.Department_Id_And_Token) {
        return genSignByDepartmentIdAndToken(params)
    } else if (signType == SignType.Enterprise_Id_And_Token) {
        return genSignByEnterpriseIdAndToken(params)
    } else if (signType == SignType.Department_Id_And_CrmId_And_Password) {
        return genSignByDepartmentIdAndCrmIdAndPassword(params)
    } else if (signType == SignType.Enterprise_Id_And_CrmId_And_Password) {
        return genSignByEnterpriseIdAndCrmIdAndPassword(params)
    } else if (signType == SignType.Department_Id_And_Cno_And_AgentToken) {
        return genSignByDepartmentIdAndCnoAndAgentToken(params)
    } else if (signType == SignType.Enterprise_Id_And_Cno_And_AgentToken) {
        return genSignByEnterpriseIdAndCnoAndAgentToken(params)
    } else {
        throw new Error(`SignType ${signType} is not support.`)
    }
}

function checkParams(requestedParams, params) {
    let missingParams = []
    requestedParams.forEach(param => {
        if (!params[param]) {
            missingParams.push(param)
        }
    })
    if (missingParams.length > 0) {
        throw new Error(`Missing params: ${missingParams.join(", ")}`)
    }
}

function getTimestamp(params) {
    return params.timestamp ? params.timestamp : Math.trunc(new Date().getTime() / 1000)
}

function logResult(timestamp, sign) {
    console.info(`${N
        }${LogTag}${N
        }Timestamp: ${timestamp}${N
        }Sign: ${sign}
    `)
}

function genSignByDepartmentIdAndToken(params) {

    checkParams(["departmentId", "token"], params)

    let { departmentId, token } = params
    let timestamp = getTimestamp(params)
    let sign = MD5(`${departmentId}${timestamp}${token}`).toString()

    logResult(timestamp, sign)

    return sign
}

function genSignByEnterpriseIdAndToken(params) {

    checkParams(["enterpriseId", "token"], params)

    let { enterpriseId, token } = params
    let timestamp = getTimestamp(params)
    let sign = MD5(`${enterpriseId}${timestamp}${token}`).toString()

    logResult(timestamp, sign)

    return sign
}

function genSignByDepartmentIdAndCrmIdAndPassword(params) {

    checkParams(["departmentId", "crmId", "password"], params)

    let { departmentId, crmId, password } = params
    let timestamp = getTimestamp(params)
    let sign = MD5(`${departmentId}${crmId}${timestamp}${MD5(`${password}`).toString()}`).toString()

    logResult(timestamp, sign)

    return sign
}

function genSignByEnterpriseIdAndCrmIdAndPassword(params) {

    checkParams(["enterpriseId", "crmId", "password"], params)

    let { enterpriseId, crmId, password } = params
    let timestamp = getTimestamp(params)
    let sign = MD5(`${enterpriseId}${crmId}${timestamp}${MD5(`${password}`).toString()}`).toString()

    logResult(timestamp, sign)

    return sign
}

function genSignByDepartmentIdAndCnoAndAgentToken(params) {

    checkParams(["departmentId", "cno", "agentToken"], params)

    let { departmentId, cno, agentToken } = params
    let timestamp = getTimestamp(params)
    let sign = MD5(`${departmentId}${cno}${timestamp}${agentToken}`).toString()

    logResult(timestamp, sign)

    return sign
}

function genSignByEnterpriseIdAndCnoAndAgentToken(params) {

    checkParams(["enterpriseId", "cno", "agentToken"], params)

    let { enterpriseId, cno, agentToken } = params
    let timestamp = getTimestamp(params)
    let sign = MD5(`${enterpriseId}${cno}${timestamp}${agentToken}`).toString()

    logResult(timestamp, sign)

    return sign
}



export {
    SignType,
    SignTool
}
