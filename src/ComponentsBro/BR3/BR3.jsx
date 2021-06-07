import React, {useMemo, useState} from "react";

import './BR3.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const BR3 = ({firstName, text, img, methodReqObBr, loading, data}) => {

    const [count, setCount] = useState(0);
    const [oncl, setoncl] = useState(true);

    const [textData, setTextData] = useState();

    const methodTextData = () => {
        setTextData(!textData);
    };
    const methodLeft = (index) => {
        if (index < data.length && index >= 0) {
            methodReqObBr(index);
            setCount(index);
        } else {
            setCount(index + 1);
        }
        setoncl(false);

    };
    const methodRight = (index) => {
        if (index < data.length) {
            methodReqObBr(index);
            setCount(index);
        } else {
            setCount(data.length - 1);
        }
        setoncl(true);
    };

    const useMemo1 = useMemo(() => {
        if (loading) {
            return <img style={{width: 100+'%'}} src={'https://miro.medium.com/max/1600/1*e_Loq49BI4WmN7o9ItTADg.gif'}
                        alt={''}/>
        }
        debugger
        if (text != undefined) {
            return textData ? text : text.substring(0, 125)
        }

    }, [text, textData]);
    const divStyle = {
        color: 'blue',
        width: 300 + 'px',
    };
    return (
        <div className={'br3__container'}>
            <div ><h1 className={'br3__headline'}>Our Reviews</h1></div>
            <div className={'br3__bottom_line'}></div>
            <div><img className={'br3_img'} src={img} alt={''}/></div>

            <div className={'br3_firstName'}><p>{firstName}</p><p>The Boss</p></div>

            <div>
                <p>{useMemo1}...
                    <button className={'br3__btn__text'}
                            onClick={methodTextData}>{textData ? 'Text less' : 'Text more'}</button>
                </p>
            </div>
            <div>
                <ArrowBackIosIcon className={`br3__sign ${!oncl && 'ok'}`} onClick={() => {
                    methodLeft(count - 1)
                }}/>
                <ArrowForwardIosIcon className={`br3__sign ${oncl && 'ok'}`} onClick={() => {
                    methodRight(count + 1)
                }}/>
            </div>
        </div>
    )
};
