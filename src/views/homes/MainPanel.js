import Button, { ButtonBase } from '@enact/sandstone/Button';
import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import { useRtcContext } from '../../utils/contexts/RtcContext';
import LS2Request from '@enact/webos/LS2Request';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../features/counter/counterSlice';

import {closeCamera, getCameraIds, startCamera} from '../../utils/actions/actions';


const MyVideo = () => {
	const { myVideo } = useRtcContext();
	const [message , setMessage] = useState(null)
	const [audioGuidance, setAudioGuidance] = useState(false);
	const [toggleDisabled, setToggleDisabled] = useState(true);

	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()

	useEffect( () => {
		if (window.WebOSServiceBridge ?? window.PalmServiceBridge) {
			new LS2Request().send({
				service: 'luna://com.webos.audio',
				method: 'setMuted',
				parameters: { muted: true },
				onSuccess: function (inResponse) {
					console.log('TV is muted');
					// To-Do something
				},
				onFailure: function (inError) {
					console.log('Failed to set muted');
					console.log('[' + inError.errorCode + ']: ' + inError.errorText);
					// To-Do something
					return;
				},
			});
		}
	}, []);

	const onToggle = useCallback(({selected}) => {
		if (window.WebOSServiceBridge ?? window.PalmServiceBridge) {
			setAudioGuidance(selected);
			new LS2Request().send({
				service: 'luna://com.webos.settingsservice/',
				method: 'setSystemSettings',
				parameters: {
					category: 'option',
					settings: {
						audioGuidance: selected ? 'on' : 'off'
					}
				}
			});
		}
	}, []);
	
	const startNetwork = () => {
		setMessage('')

		// const displayAffinity = JSON.parse(window?.PalmSystem?.launchParams)?.displayAffinity

		// console.log("displayAffinity is =========> ", displayAffinity)

		new LS2Request().send({
			service: 'luna://com.webos.settingsservice/',
			method: 'getSystemSettings',
			parameters: {
				category: 'option',
				keys: ['standByLight']
			},
			subscribe: true,
			onSuccess: function (inResponse) {
				console.log('Successfully launched ======>', inResponse);
			},
			onFailure: function (inError) {
				console.log('Failed to launch ======>', inError);
			},
			});
	}

	useEffect(() => {

	}, [myVideo, message]);
	return (
		<div className='relative w-full h-full bg-gray-500'>
			<Button onClick={() => dispatch(increment())}>Click Store</Button>
			<span>{count}</span>
			<Button onClick={() => dispatch(decrement())}>Click Store</Button>
			<div className='fixed bottom-4 z-20 text-sm p-2 left-4 rounded'>
				<span>{message ? message : ""}</span>

				<div className='flex items-center bg-black'>
					<Button onClick={() => startNetwork()}>Click</Button>
					


					{/* <CheckboxItem
						
						alt="Toggle"
						selected={audioGuidance}
						disabled={toggleDisabled}
						onToggle={onToggle}
					>
						Audio guidance
					</CheckboxItem> */}
				</div>
				
				{/* <button className='bg-black p-1 rounded' onClick={() => startNetwork()}>Click</button> */}
			</div>
			<video
				id="user-video"
				// className={`${
				// !constraintMicCameraUser?.camera ? "z-5" : "z-10"
				// } absolute w-full h-full object-cover`}
				className={`top-0 left-0 w-full h-full z-10 object-cover`}
				ref={myVideo}
				autoPlay
				playsInline
			/>
		</div>
		
	)
}

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => {
		return (
			<Panel {...props}>
				<div className='w-full h-full fixed top-0 left-0 z-0 bg-green-100'>
					<MyVideo />
				</div>
			</Panel>
		)
	}
});

export default MainPanel;
