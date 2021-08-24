import { animated } from "react-spring";
import styled from "styled-components";
import Plus from '../assets/ouvrir.svg'
import Minus from '../assets/fermer.svg'

const CollapseIcon = styled((props: any) => (
    <div {...props}>
        <div style={{cursor: 'pointer'}} className="expanded">
            <animated.img style={props.style} src={Plus} alt='plus'/>
        </div>
        <div style={{cursor: 'pointer'}} className="collapsed">
            <animated.img style={props.style} src={Minus} alt='minus'/>
        </div>
    </div>
))`
      & > .expanded {
        display: block;
      }

      & > .collapsed {
        display: none;
      }

      .Mui-expanded & > .collapsed {
        display: block;
      }

      .Mui-expanded & > .expanded {
        display: none;
      }
    `;

export default CollapseIcon