import styled from 'styled-components/native'

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
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border-width: 3px;
  border-color: #F0F1F6;
  margin-right: 20px;
`

const Column = styled.View`
  flex-direction: column;
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

export { Item, Title, SubTitle, Column, Icon, ContainerIcon }
