import style from './OurTeamPersons.module.scss';
import Person1 from '../../../assets/images/Person1.png';
import Person2 from '../../../assets/images/Person2.png';
import Person3 from '../../../assets/images/Person3.png';
import { BashDottedLineLeftSvg, BashDottedLineRightSvg } from "../../Icons";
import { PersonItem } from "../PersonItem";

const persons = [
    {
        id: 1,
        name: 'Person',
        img: Person1
    },
    {
        id: 2,
        name: 'Person',
        img: Person2
    },
    {
        id: 3,
        name: 'Person',
        img: Person3
    }
];

const OurTeamPersons = () => {
    return (
        <div className={style.ourTeamPersons}>
            {persons.map( item => (
                <PersonItem key={item.id} person={item} />
            ) )}
            <BashDottedLineLeftSvg className={style.rightLine} />
            <BashDottedLineRightSvg className={style.leftLine} />
        </div>
    );
};

export { OurTeamPersons };