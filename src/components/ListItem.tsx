import styled from "styled-components";
import Arrow from '../assets/fleche.svg'


const ListItem = styled((props: any) => (
    <li {...props}>
    </li>
))`
      & {
        paddingLeft: 1.3em;
        margin: 2em 2em 2em 0;
      }

      &:before {
        content: url(${Arrow});
        display: inline-block;
        marginLeft: -1.3em;
        width: 1.3em;
      }
    `;

export default ListItem