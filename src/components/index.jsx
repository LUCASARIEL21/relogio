import React, {useEffect, useState} from 'react'
import * as S from './styles'

export const Relogio = () => {
  const [horas, setHoras] = useState()
  const [minutos, setMinutos] = useState()
  const [seg, setSeg] = useState()

  useEffect(() => {
    setInterval(()=> {
      const dateToday = new Date();
      const hr = dateToday.getHours();
      setHoras(hr)
    }, 1000)
  }, [])

  useEffect(() => {
    setInterval(()=> {
      const dateToday = new Date();
      const min = dateToday.getMinutes();
      setMinutos(min)
    }, 1000)
  }, [])

  useEffect(() => {
    setInterval(()=> {
      const dateToday = new Date();
      const s = dateToday.getSeconds();
      setSeg(s)
    }, 1000)
  }, [])

  return (
    <S.relogio>
        <S.horas>
            <S.shoras>{horas < 10 ? "0" + horas : horas}</S.shoras>
            <S.mtemp>Horas</S.mtemp>
        </S.horas>

        <S.minutos>
            <S.smin>{minutos < 10 ? "0" + minutos : minutos}</S.smin>
            <S.mtemp>Minutos</S.mtemp>
        </S.minutos>

        <S.segundos>
            <S.sseg>{seg < 10 ? "0" + seg : seg}</S.sseg>
            <S.stemp>Segundos</S.stemp>
        </S.segundos>
    </S.relogio>
  )
}