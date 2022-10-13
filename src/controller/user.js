// 创建用户
const createUser = async (req, res) => {
  res.json({
    status: 200,
    message: 'success',
    data: {
      code: 1,
      message: '增加成功'
    }
  })
}

// 获取用户
const getUser = async (req, res) => {
  res.json({
    status: 200,
    message: 'success',
    data: {
      name: 'hello'
    }
  })
}

module.exports = {
  createUser,
  getUser
}