
import Sidebar from '../components/sections/Sidebar/Sidebar'
import Main from "../components/sections/Modules/Modules"
import { fetch_module } from '../utils/events_fetch'

const Modules = ({data}) => {
  console.log({data});
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-6">
        <Main data={data?.msg} />
      </div>
      <div>
        <Sidebar />
      </div>

    </div>
  )
}

export default Modules

export const getStaticProps = async () =>{
  let resp = await fetch_module();
  let data = resp?.data
  console.log(resp);
  return {
    props:{
      data
    }
  }
}
