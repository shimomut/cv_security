
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

function AddOnsPage(props) {
    return (
        <div>
            <h2>Add-ons</h2>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <AddOnCard title="Tailgating detection" price="$ XXX.xx / month" image="addon1.jpg" subscribed={true} />
                </Grid>
                <Grid item xs={6}>
                    <AddOnCard title="People counting" price="$ XXX.xx / month" image="addon2.jpg"  />
                </Grid>
                <Grid item xs={6}>
                    <AddOnCard title="Slip & fall detection" price="$ XXX.xx / month" image="addon3.jpg" />
                </Grid>
                <Grid item xs={6}>
                    <AddOnCard title="Anomaly detection" price="$ XXX.xx / month" image="addon4.jpg" />
                </Grid>
            </Grid>
        </div>
    );
}

export default AddOnsPage;
