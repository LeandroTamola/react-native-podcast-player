import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {theme} from '../../constants/theme';

interface RowEpisodeProps {}

const RowEpisode = ({}: RowEpisodeProps) => {
  return (
    <Box paddingVertical="xs">
      <Text size="xs" color="grey" bold>
        FRIDAY
      </Text>
      <Text bold>#400 - The Title</Text>
      <Text size="sm" color="grey" numberOfLines={2}>
        Joseph James Rogan2​ nació el 11 de agosto de 1967 en Newark, Nueva
        Jersey,3​ ciudad a donde su abuelo se había mudado con su familia en la
        década de 1940.4​ Su linaje es un cuarto irlandés y tres cuartos de
        ascendencia italiana.5​ Su padre, Joseph, trabajó como oficial de
        policía en Newark. A los cinco años de edad, los padres de Rogan se
        divorciaron,6​ y su padre no ha estado en contacto con él desde que
        tenía siete años. Rogan dijo de su padre: "Todo lo que recuerdo de mi
        padre son estos breves y violentos destellos de violencia doméstica
        [...] Pero no quiero quejarme de mi infancia. Nunca me pasó nada malo
        [...] No odio al tipo".6​ A los siete años, Rogan y su familia se
        mudaron a San Francisco, California,6​ seguido de otra mudanza cuando
        tenía 11 años a Gainesville, Florida.7​ Se instalaron en Newton Upper
        Falls, Massachusetts, donde Rogan asistió a Newton South High School y
        se graduó en 1985.8​ Rogan jugó a béisbol en las ligas infantiles, pero
        desarrolló interés en las artes marciales en su adolescencia9​ ya que
        "fue realmente lo primero que me dio la esperanza de no ser un perdedor.
        Así que realmente me sentí muy, muy atraído hacia ellas ".10​ A los
        catorce años, empezó a aprender karate6​ y a competir en taekwondo.3​ A
        los diecinueve años, ganó un torneo del US Open Championship como peso
        ligero.8​ Fue campeón estatal de full contact de Massachusetts durante
        cuatro años consecutivos y se convirtió en instructor de la
        disciplina.3​6​ Rogan también practicó kickboxing amateur con un récord
        de 2-1.11​ Rogan se retiró de la competición a los 21 años, ya que
        comenzó a sufrir frecuentes dolores de cabeza y temía lesiones
        graves.3​6​ Asistió a la Universidad de Massachusetts Boston, pero lo
        encontró inútil y abandonó antes de graduarse.6​
      </Text>
      <Text size="xs" color="greyDark">
        3hrs 12min
      </Text>
    </Box>
  );
};

export default RowEpisode;
