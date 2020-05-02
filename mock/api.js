import mockjs from 'mockjs';

/获取参与人员列表/

function getUserList (req, res) {
	const params = req.query;
	const page = params.page;
	const datas = mockjs.mock({
		'list|10':[
			{
				page,
				id:'@integer(0,10)',
				name:'姓名'+'@integer(0,10)'+page
			}
		]
	})
	return res.json(datas);
}

export default{
	'GET /api/userList':getUserList
}