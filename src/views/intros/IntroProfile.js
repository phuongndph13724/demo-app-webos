import Panels, { Header, Panel } from '@enact/sandstone/Panels'
import spotlight from '@enact/spotlight';
import React, { useCallback, useRef, useState } from 'react'
import Button from '@enact/sandstone/Button';
import ri from '@enact/ui/resolution';
import TabLayout, { Tab } from '@enact/sandstone/TabLayout';
import BodyText from '@enact/sandstone/BodyText';
import Item from '@enact/sandstone/Item';
import { VirtualGridList } from '@enact/sandstone/VirtualList';
import Icon from '@enact/sandstone/Icon';
import Skinnable from '@enact/sandstone/Skinnable';
import Image from '@enact/sandstone/Image';
import ImageItem from '@enact/sandstone/ImageItem';


const IntroProfile = () => {
	const scrollToRef = useRef(null);
	const current = spotlight?.getCurrent()
	const [indexPanel, setIndexPanel] = useState(0)

	const getScrollTo = useCallback((scrollTo) => {
		scrollToRef.current = scrollTo;
	}, []);

	const renderItem = useCallback(({index, ...rest}) => {
		return (
			<ImageItem {...rest}>
				123
			</ImageItem>
		);
	}, []);

	return (
		<div>
			<Panels
				backButtonBackgroundOpacity="transparent"
				closeButtonBackgroundOpacity="transparent"
				index={indexPanel}
				onBack={function noRefCheck() { 
					setIndexPanel(indexPanel - 1)
				}}
				onClose={function noRefCheck() { }}
				onTransition={function noRefCheck() { }}
				onWillTransition={function noRefCheck() { }}
			>
				<Panel>
					<Header title="Panel with Items">
						<Button
							icon="arrowlargeright"
							iconFlip="auto"
							onClick={function noRefCheck() {
								setIndexPanel(indexPanel + 1)
							}}
							size="small"
							slot="slotAfter"
						/>
					</Header>
					<BodyText>
						Example text inside an Panel Body
					</BodyText>
					<Item>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Item>
					<Item>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Item>
					<Item>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Item>
				</Panel>
				<Panel>
					<Header title="Panel with VirtualGridList">
						<Button
							icon="arrowlargeright"
							iconFlip="auto"
							onClick={function noRefCheck() {
								setIndexPanel(indexPanel + 1)
							 }}
							size="small"
							slot="slotAfter"
						/>
					</Header>
					<VirtualGridList
						cbScrollTo={getScrollTo}
						dataSize={100}
						itemRenderer={renderItem}
						itemSize={{minWidth: ri.scale(900), minHeight: ri.scale(780)}}
						spacing={0}
					/>
				</Panel>
				<Panel>
					<Header title="Panel with TabLayout">
						<Button
							icon="arrowlargeright"
							iconFlip="auto"
							onClick={function noRefCheck() { 
								console.log(123);
								setIndexPanel(indexPanel + 1)
							}}
							size="small"
							slot="slotAfter"
						/>
					</Header>
					<TabLayout>
						<Tab
							icon="home"
							title="Home"
						>
							<Icon>
								home
							</Icon>
							Home
							<Skinnable
								// style={{
								// 	height: 333.3333333333333
								// }}
							>
								<Image
									caption="Image"
									src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
									style={{
										marginTop: '24px'
									}}
								/>
								<Image
									caption="Image"
									src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
									style={{
										marginTop: '24px'
									}}
								/>
								<Image
									caption="Image"
									src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
									style={{
										marginTop: '24px'
									}}
								/>
								<Image
									caption="Image"
									src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
									style={{
										marginTop: '24px'
									}}
								/>
								<Image
									caption="Image"
									src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
									style={{
										marginTop: '24px'
									}}
								/>
								<Image
									caption="Image"
									src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 240' width='360' height='240'%3E%3Crect width='360' height='240' fill='%23d8d8d8'%3E%3C/rect%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36px' fill='%236e6e6e'%3E360 X 240%3C/text%3E%3C/svg%3E"
									style={{
										marginTop: '24px'
									}}
								/>
							</Skinnable>
						</Tab>
						<Tab
							icon="demosync"
							title="Button"
						>
							<Button icon="demosync">
								Button!
							</Button>
							<Button icon="demosync">
								Button!
							</Button>
							<Button icon="demosync">
								Button!
							</Button>
							<Button icon="demosync">
								Button!
							</Button>
						</Tab>
						<Tab
							icon="playcircle"
							title="Item"
						>
							<Item slotBefore={<Icon>playcircle</Icon>}>
								Hello Item
							</Item>
						</Tab>
					</TabLayout>
				</Panel>
				<Panel>
					<Header title="Panel with Scroller" />
					<Skinnable
						focusableScrollbar="byEnter"
						verticalScrollbar="visible"
					>
						<div
							style={{
								height: '41.75rem'
							}}
						>
							<BodyText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id blandit nunc. Donec lacinia nisi vitae mi dictum, eget pulvinar nunc tincidunt. Integer vehicula tempus rutrum. Sed efficitur neque in arcu dignissim cursus.
							</BodyText>
						</div>
					</Skinnable>
				</Panel>
			</Panels>
		</div>
	)
}

export default IntroProfile