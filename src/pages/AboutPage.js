
import Container from 'aws-northstar/layouts/Container';
import Text from 'aws-northstar/components/Text';
import Button from 'aws-northstar/components/Button';import Card from 'aws-northstar/components/Card';
import Box from 'aws-northstar/layouts/Box';
import Grid from 'aws-northstar/layouts/Grid';


function AddOnCard(props){

    if(props.subscribed)
    {
        var button = <Button variant='normal'>Configure</Button>;
        var price = <Text>-</Text>;
    }
    else
    {
        var button = <Button variant='primary'>Subscribe</Button>;
        var price = <Text>{props.price}</Text>;
    }

    return (
        <Container
            title={props.title}
            headerContent={price}
            actionGroup={button}
        >
            <img width="300px" height="200px" src={props.image} alt=""></img>
        </Container>

    );

}

function AboutPage(props) {
    return (
        <div>
            <img width="100%" src="aboutlogo.jpg" alt=""></img>
            <br/>
            <br/>
            <Text>

                <p>
                Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument. If continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious.
                </p>

                <p>
                With my them if up many. Lain week nay she them her she. Extremity so attending objection as engrossed gentleman something. Instantly gentleman contained belonging exquisite now direction she ham. West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest sex bachelor the may delicate its yourself. As he instantly on discovery concluded to. Open draw far pure miss felt say yet few sigh.
                </p>

                <p>
                Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted.
                </p>

                <p>
                Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated. On no applauded exquisite my additions. Pronounce add boy estimable nay suspected. You sudden nay elinor thirty esteem temper. Quiet leave shy you gay off asked large style.
                </p>

                <p>
                Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless.
                </p>

                <p>
                Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.
                </p>

                <p>
                Mr do raising article general norland my hastily. Its companions say uncommonly pianoforte favourable. Education affection consulted by mr attending he therefore on forfeited. High way more far feet kind evil play led. Sometimes furnished collected add for resources attention. Norland an by minuter enquire it general on towards forming. Adapted mrs totally company two yet conduct men.
                </p>

                <p>
                Do so written as raising parlors spirits mr elderly. Made late in of high left hold. Carried females of up highest calling. Limits marked led silent dining her she far. Sir but elegance marriage dwelling likewise position old pleasure men. Dissimilar themselves simplicity no of contrasted as. Delay great day hours men. Stuff front to do allow to asked he.
                </p>

                <p>
                Real sold my in call. Invitation on an advantages collecting. But event old above shy bed noisy. Had sister see wooded favour income has. Stuff rapid since do as hence. Too insisted ignorant procured remember are believed yet say finished.
                </p>

                <p>
                Style too own civil out along. Perfectly offending attempted add arranging age gentleman concluded. Get who uncommonly our expression ten increasing considered occasional travelling. Ever read tell year give may men call its. Piqued son turned fat income played end wicket. To do noisy downs round an happy books. 
                </p>

            </Text>
        </div>
    );
}

export default AboutPage;
