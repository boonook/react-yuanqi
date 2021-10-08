/**
 * Created by hao.cheng on 2017/5/7.
 */
import React from 'react';
import "./Video.less"

class Video extends React.Component {
    state = {
        list:[
                {id:1,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:2,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:3,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:4,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:5,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:6,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:7,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:8,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:9,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:10,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:11,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'},
                {id:12,src:'http://localhost:3003/public/video/jianjiemax.mp4',title:'虚拟仿真实验'}
            ]
    };
    render() {
        return (
            <div className={'videoPage'} key={'video'}>
                <ul>
                    {this.state.list.map(item=>{
                        return (<li key={item.id}>
                            <div>
                                <p>{item.title}</p>
                                <video preload={'metadata'} src="http://localhost:3003/public/video/jianjiemax.mp4" controls="controls">
                                    您的浏览器不支持 video 标签。
                                </video>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default Video;
