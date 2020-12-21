import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/UserModel.js'
import Product from './models/ProductModel.js'
import Order from './models/OrderModel.js'
import connectDB from './confing/db.js'

dotenv.config()
connectDB()

//插入样本数据到数据库
const importData = async () =>{
    try{
        //清空数据库种样本数据
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        //数据插入
        const CreateUsers = await User.insertMany(users)

        const adminUser = CreateUsers[0]._id

        const sampleProducts = products.map(product =>{
            return {...product,user: adminUser}
        })
        await Product.insertMany(sampleProducts)

        console.log(`样本数据插入成功`.green.inverse)
        process.exit(1)
    }catch(err){
        console.log(`${err}`.red.inverse)
        process.exit(1)
    }
}

//销毁样本数据到数据库
const destroyData = async () =>{
    try{
        //清空数据库种样本数据
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        console.log(`销毁数据成功`.green.inverse)
        process.exit(1)
    }catch(err){
        console.log(`${err}`.red.inverse)
        process.exit(1)
    }
}

//判断命令执行函数
if(process.argv[2] === '-d') {
    destroyData()
}else{
    importData()
}