
import Container from 'aws-northstar/layouts/Container';
import Text from 'aws-northstar/components/Text';
import Button from 'aws-northstar/components/Button'; import Card from 'aws-northstar/components/Card';
import Box from 'aws-northstar/layouts/Box';
import Grid from 'aws-northstar/layouts/Grid';
import LineChart, { Line, NORTHSTAR_COLORS, YAxis, XAxis, Tooltip, Legend, CartesianGrid } from 'aws-northstar/charts/LineChart';
import PieChart, { Pie } from 'aws-northstar/charts/PieChart';
import BarChart, { Bar } from 'aws-northstar/charts/BarChart';
    

function TailgatingLineChart(props) {

    const sampleData = [
        { name:  '3:00', tailgating:  0, safety: 0, amt: 24 },
        { name:  '4:00', tailgating:  0, safety: 0, amt: 24 },
        { name:  '5:00', tailgating:  0, safety: 0, amt: 24 },
        { name:  '6:00', tailgating:  0, safety: 0, amt: 24 },
        { name:  '7:00', tailgating:  0, safety: 0, amt: 24 },
        { name:  '8:00', tailgating:  2, safety: 0, amt: 24 },
        { name:  '9:00', tailgating:  2, safety: 0, amt: 24 },
        { name: '10:00', tailgating:  1, safety: 0, amt: 22, },
        { name: '11:00', tailgating: 10, safety: 0, amt: 22, },
        { name: '12:00', tailgating:  2, safety: 3, amt: 20, },
        { name: '13:00', tailgating:  1, safety: 1, amt: 21, },
        { name: '15:00', tailgating:  3, safety: 0, amt: 25, },
        { name: '16:00', tailgating:  2, safety: 0, amt: 21, },
    ];

    return (
        <Container>
            <LineChart title="Security events timeline" width={800} height={300} data={sampleData}>
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="1 1" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="tailgating" stroke={NORTHSTAR_COLORS.ORANGE} fill={NORTHSTAR_COLORS.ORANGE} />
                <Line dataKey="safety" stroke={NORTHSTAR_COLORS.BLUE} fill={NORTHSTAR_COLORS.BLUE} />
            </LineChart>
        </Container>
    );
}

function GateTrafficPieChart(props) {

    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];

    return (
        <Container>
            <PieChart title="Security event type per camera" width={350} height={250}>
                <Pie data={data01} dataKey="value" outerRadius={60}
                    fill={NORTHSTAR_COLORS.BLUE}
                    stroke={NORTHSTAR_COLORS.WHITE} />
                <Pie data={data02} dataKey="value"
                    stroke={NORTHSTAR_COLORS.WHITE}
                    fill={NORTHSTAR_COLORS.ORANGE}
                    innerRadius={70}
                    outerRadius={90} label />
            </PieChart>
        </Container>
    );
}

function SomethingBarChart(props) {

    const sampleData = [
        { name: 'Front camera 1', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Front camera 2', uv: 3000, pv: 1398, amt: 2210, },
        { name: 'Front camera 3', uv: 2000, pv: 9800, amt: 2290, },
        { name: 'Back camera 1', uv: 2780, pv: 3908, amt: 2000, },
        { name: 'Back camera 2', uv: 1890, pv: 4800, amt: 2181, },
        { name: 'Back camera 3', uv: 2390, pv: 3800, amt: 2500, },
        { name: 'Emergency exit 1', uv: 3490, pv: 4300, amt: 2100, },
    ];
    
    return (
        <Container>
            <BarChart title="Traffic volume per camera" width={350} height={250} data={sampleData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill={NORTHSTAR_COLORS.ORANGE} stroke={NORTHSTAR_COLORS.ORANGE} />
                <Bar dataKey="uv" fill={NORTHSTAR_COLORS.BLUE} stroke={NORTHSTAR_COLORS.BLUE}/>
            </BarChart>
        </Container>
    );
}

function ChartsPage(props) {
    return (
        <div>
            <h2>Charts</h2>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TailgatingLineChart />
                </Grid>
                <Grid item xs={6}>
                    <GateTrafficPieChart />
                </Grid>
                <Grid item xs={6}>
                    <SomethingBarChart />
                </Grid>
            </Grid>
        </div>
    );
}

export default ChartsPage;
