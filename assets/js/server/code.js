/**
 * 请求码
 */
export default {
  SUCCESS: 200000, // 请求成功
  LOGICAL_ERR: 400001, // 业务逻辑错误
  PARAMES_ERR: 400002, // 参数校验错误
  HYS_EXCEPTION: 400003, // Hystrix异常
  NO_RECORD: 400004, // 查询无记录
  DATA_EXIST: 400005, // 数据已存在
  SERVER_ERR: 500000, // 服务内部错误
};
