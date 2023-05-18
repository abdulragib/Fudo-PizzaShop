import Layout from "../../components/Layout"
import { client } from "../../lib/client"
import css from '../../styles/order.module.css'


export const getServerSideProps = async(context)=>{
    const { id = "" } = context.params;
    const query =`*[_type =="order" && _id == '${id}']`
    const order= await client.fetch(query)

    return{
        props:{
            order:order[0]
        }
    }
}
export default function Orders({order}){
  return(
    <Layout>
        <div className={css.container}>
           <span className={css.heading}>
                Order in Process
           </span>
        </div>
    </Layout>
  )
}
