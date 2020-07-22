import styled from 'styled-components/native'

const TitleHeader = styled.Text`
	color: #152975;
	font-weight: 500;
	font-size: 23px;
	margin-top: 50px;
	margin-left: 15px;
`

const ContainerHeader = styled.View`
	background: #f5f7fb;
	/* height: 200px; */
	justify-content: flex-end;
`

const ContainerStatistics = styled.View`
	flex-direction: row;
	justify-content: space-between;
`

const StatisticsItem = styled.View`
	flex-direction: column;
`

const StatisticsTitle = styled.Text`
	font-size: 40px;
	margin-bottom: 30;
	color: #152975;
	font-weight: 500;
`

const StatisticsSubtitle = styled.Text`
	font-size: 23px;
	color: #152975;
	font-weight: 400;
`

const StatisticsSpan = styled.Text`
	font-size: 16px;
	color: #666;
`

const Content = styled.View`
	padding-left: 15px;
	padding-right: 15px;
	justify-content: ${(props) => props.align || 'flex-start'};
	padding-bottom: ${(props) => props.pb || 0};
`

const Item = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 25px;
`

const Icon = styled.Image`
	width: 20px;
	tint-color: #999;
`

const ContainerIcon = styled.View`
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	margin-right: 20px;
`

const Column = styled.View`
	flex-direction: column;
	margin-left: ${(props) => props.ml || 0};
`

const Title = styled.Text`
	font-weight: 400;
	color: #152975;
	font-size: 16px;
`
const SubTitle = styled.Text`
	color: #aaa;
	font-size: 13px;
	margin-top: 7px;
`

export {
	TitleHeader,
	Content,
	ContainerStatistics,
	StatisticsTitle,
	StatisticsItem,
	StatisticsSubtitle,
	StatisticsSpan,
	Item,
	Title,
	SubTitle,
	Column,
	Icon,
	ContainerIcon,
	ContainerHeader,
}
