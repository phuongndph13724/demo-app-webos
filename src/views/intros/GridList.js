import Item from '@enact/sandstone/Item';
import { VirtualGridList } from '@enact/sandstone/VirtualList';
import ImageItem from '@enact/sandstone/ImageItem';
import Image from '@enact/sandstone/Image';
const GridListItem = ({ index, ...rest }) => {
    return (
            // <div>
            //     <Image src="https://dummyimage.com/64/e048e0/0011ff" style={{height: 64, width: 64}} />
            // </div>
        <ImageItem
            onClick={() => console.log(index)}
            className='bg-black rounded focus:ring-4 focus:ring-black text-md'
            inline
            label="ImageItem label"
            src="https://bled.vn/wp-content/uploads/2023/01/anh-san-pham-002.jpg"
            style={{
                height: '6rem',
                width: '8rem'
            }}
        >
            {/* <div
                key={index}
                onFocus={() => console.log(index)}
                data-spotlight-focusable={true}
            >
                <p className='text-lg'>Title</p>
            </div> */}
        </ImageItem>
    );
};

const GridList = ({ dataSize }) => {
    return (
        <VirtualGridList
            itemRenderer={GridListItem}
            dataSize={dataSize}
            key="native"
            className=""
            itemSize={{
                minHeight: 180,
                minWidth: 270
            }}
            horizontalScrollbar="auto"
            noScrollByWheel={false}
            onScrollStart={function noRefCheck() { }}
            onScrollStop={function noRefCheck() { }}
            spacing={2}
            direction='vertical'
            horizontalScrollThumbAriaLabel="NDP"
        />
    );
};

export default GridList;