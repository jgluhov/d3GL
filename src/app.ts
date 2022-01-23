import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';

const area = document.querySelector('.area')
const margin = {
    left: 10,
    right: 10,
    top: 10,
    bottom: 10
}
const width = area.clientWidth - margin.left - margin.right;
const height = area.clientHeight - margin.top - margin.bottom;

const svg = select(area)
        .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
        .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`)

const data = [5, 15, 35, 50, 65];

const scale = scaleLinear()
    .range([0, width + margin.left + margin.right])
    .domain([0, 100]);

svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', d => scale(d))
    .attr('cy', height / 2)
    .attr('r', 10)
    .attr('fill', 'green');
