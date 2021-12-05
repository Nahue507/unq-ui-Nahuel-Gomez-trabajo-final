import './Ficha.css';

const Ficha = ({animando, handleMemoClick, ficha}) => (
    <div className="memo-block" onClick={() => (!ficha.flipped && !animando) && handleMemoClick(ficha)}>
        <div className={`memo-block-inner ${ficha.flipped && 'memo-block-flipped'}`}>
            <div className="memo-block-front">
            </div>
            <div className="memo-block-back">
                <img src={ficha.emoji} width="100px"  height="100px" className ="img-fluid"/>
            </div>
        </div>
    </div>
)

export default Ficha;