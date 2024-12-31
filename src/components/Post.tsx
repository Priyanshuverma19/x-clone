import React from 'react'
import Image from './Image'
import PostInfo from './PostInfo'
import PostInteractions from './PostInteractions'

const Post = () => {
  return (
    <div className='p-4 border-y-[1px] border-borderGray'>
        {/* Post type */}
        <div className='flex items-center gap-2 text-sm text-textGray mb-2'>
            icon
            <span>
            priyanshu reposted
            </span>
        </div>
        {/* Post content */}
        <div className='flex gap-4'>
            {/* Avatar */}
            <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                <Image path='public/general/avatar.png' alt='' w={100} h={100} tr={true}/>

            </div>
            {/* Content */}
            <div className='flex-1 flex flex-col'>
                {/* topSection */}
                <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center gap-2 flex-wrap'>
                    <h1 className='text-md font-bold'>priyanshu</h1>
                    <span className='text-textGray'>@priyanshu</span>
                    <span className='text-textGray'>1 day ago</span>

                </div>
                <PostInfo/>
                </div>
                {/* Text and media */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ab.</p>
                <Image path='public/general/post.jpeg' alt='' w={600} h={600}/>
                <PostInteractions/>
            </div>

        </div>
    </div>
  )
}

export default Post