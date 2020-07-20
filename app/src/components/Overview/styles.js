import styled from 'styled-components/native'

const Item = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 25;
`

const Icon = styled.Image`
  width: 20;
  tint-color: #999;
`

const ContainerIcon = styled.View`
  align-items: center;
  justify-content: center;
  width: 60;
  height: 60;
  border-radius: 50;
  border-width: 3;
  border-color: #F0F1F6;
  margin-right: 20;
`

const Column = styled.View`
  flex-direction: column;
`

const Title = styled.Text`
  font-weight: 400;
  color: #152975;
  font-size: 16;
`
const SubTitle = styled.Text`
  color: #aaa;
  font-size: 13;
  margin-top: 7;
`

export { Item, Title, SubTitle, Column, Icon, ContainerIcon }
