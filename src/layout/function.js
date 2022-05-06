import {Link} from 'react-router-dom';

// 生成items
const create_items = (item,index)=>{
    // console.log(item);
    return{
        // key:" "+index,
        key:item.path,
        icon:<div className={`iconfont list_icon ${item.icon}`}></div>,
        label:<Link to={item.path}>{item.name}</Link>
    }
}
export const map_arr =(arr)=>{
    let result = arr.map((item,index)=>{
        // console.log(item);
        if(item.children && item.children.length>0){
            // console.log(item);
            return{
                key:item.path,
                icon:<div className={`iconfont list_icon ${item.icon}`}></div>,
                label:item.name,
                children:item.children.map((_,subindex) => {return create_items(_,"sub"+index+subindex)})
            }
        }else{
            return create_items(item,index);
        }
    })
    return result;
}

