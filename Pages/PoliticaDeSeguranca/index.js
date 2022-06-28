import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView

} from "react-native";


export default function PoliticaDeSeguranca({ navigation }) {

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>

                <View>
                    <Image
                    style={{
                        marginTop: "18%",
                        height: 65,
                        width: 65,
                        alignSelf: "center",
                    }}
                    source={require("../../assets/logoConn.png")}
                    />
                </View>

                <View style={styles.containerTitle}>  
                    <Text style={styles.txtTitulo}>
                    Política de Segurança 
                    </Text>
                </View>  

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 1 - INFORMAÇÕES GERAIS
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    A presente Política de Privacidade contém informações sobre coleta, uso,
        armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes
        do aplicativo ConnTec, com a finalidade de demonstrar absoluta transparência quanto
        ao assunto e esclarecer a todos interessados sobre os tipos de dados que são
        coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou
        excluir as suas informações pessoais.
                    </Text>
                    
                    <Text style={styles.txt}>
                    Esta Política de Privacidade aplica-se a todos os usuários e visitantes do aplicativo
        ConnTec e integra os Termos e Condições Gerais de Uso do aplicativo ConnTec,
        devidamente inscrita no CNPJ sob o nº XX. XXX. XXX/0001-XX.
                    </Text>

                    <Text style={styles.txt}>
                    O presente documento foi elaborado em conformidade com a Lei Geral de Proteção
        de Dados Pessoais (Lei 13.709/18), o Marco Civil da Internet (Lei 12.965/14) (e o
        Regulamento da UE n. 2016/6790). Ainda, o documento poderá ser atualizado em
        decorrência de eventual atualização normativa, razão pela qual se convida o usuário
        a consultar periodicamente esta seção.
                    </Text>
                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 2 - COMO RECOLHEMOS OS DADOS PESSOAIS DO USUÁRIO?
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Os dados pessoais do usuário são recolhidos pela plataforma da seguinte forma:
                    </Text>
                    
                    <Text style={styles.txt}>
                    Quando o usuário cria uma conta/perfil na plataforma ConnTec: utilizamos alguns
dados básicos que são e-mail e nome completo. A partir deles, podemos identificar o
usuário, além de garantir uma maior segurança e bem-estar às suas necessidades.
Ficam cientes os usuários de que seu perfil na plataforma estará acessível a todos os
demais usuários da plataforma ConnTec.
                    </Text>

                    <Text style={styles.txt}>
                    Quando um usuário acessa o aplicativo ConnTec: as informações sobre interação e
acesso são coletadas pela empresa para garantir uma melhor experiência ao usuário
e visitante. Estes dados podem tratar sobre as palavras-chaves utilizadas em uma
busca, o compartilhamento de um documento específico, comentários, visualizações
de páginas, perfis, a URL de onde o usuário provém, seus IPs de acesso, dentre
outras que poderão ser armazenadas e retidas.
                    </Text>
                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 3 - QUAIS DADOS PESSOAIS RECOLHEMOS SOBRE O USUÁRIO?
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Os dados pessoais do usuário recolhidos são os seguintes:
                    </Text>
                    
                    <Text style={styles.txt}>
                    Dados para a criação da conta/perfil na plataforma ConnTec: e-mail e nome
completo
                    </Text>

                    <Text style={styles.txt}>
                    Dados para otimização da navegação: acesso a páginas, palavras-chave
utilizadas na busca, comentários, interação com outros perfis e usuários, perfis
seguidos, endereço de IP.

                    </Text>

                    <Text style={styles.txt}>
                    Newsletter: o e-mail cadastrado pelo visitante que optar por se inscrever na
Newsletter será coletado e armazenado até que o usuário solicite o
descadastro.
                    </Text>
                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 4 - PARA QUE FINALIDADES UTILIZAMOS OS DADOS PESSOAIS DO
USUÁRIO E VISITANTE?

                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Os dados pessoais do usuário e do visitante coletados e armazenados pela plataforma
ConnTec tem por finalidade:

                    </Text>
                    
                    <Text style={styles.txt}>
                    Bem-estar do usuário: aprimorar o aplicativo, facilitar, agilizar e cumprir os
compromissos estabelecidos entre o usuário e a empresa, melhorar a experiência dos
usuários e fornecer funcionalidades específicas a depender das características
básicas do usuário.
                    </Text>

                    <Text style={styles.txt}>
                    Melhorias do aplicativo: compreender como o usuário utiliza os serviços do aplicativo,
para ajudar no desenvolvimento de funcionalidades.

                    </Text>

                    <Text style={styles.txt}>
                    Previsão do perfil do usuário: tratamento automatizados de dados pessoais para
avaliar o uso na plataforma.
                    </Text>

                    <Text style={styles.txt}>
                    Dados de cadastro: para permitir o acesso do usuário a determinados conteúdos da
plataforma, exclusivo para usuários cadastrados

                    </Text>

                    <Text style={styles.txt}>
                    O tratamento de dados pessoais para finalidades não previstas nesta Política de
Privacidade somente ocorrerá mediante comunicação prévia ao usuário, de modo que
os direitos e obrigações aqui previstos permanecem aplicáveis.

                    </Text>
                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 5 - POR QUANTO TEMPO OS DADOS PESSOAIS FICAM
ARMAZENADOS?
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Os dados pessoais do usuário e visitante são armazenados pela plataforma durante
o período necessário para a utilização do aplicativo ConnTec, conforme o disposto no
inciso I do artigo 15 da Lei 13.709/18.

                    </Text>
                    
                    <Text style={styles.txt}>
                    Os dados podem ser removidos ou anonimizados a pedido do usuário, excetuando os
casos em que a lei oferecer outro tratamento.

                    </Text>

                    <Text style={styles.txt}>
                    Ainda, os dados pessoais dos usuários apenas podem ser conservados após o
término de seu tratamento nas seguintes hipóteses previstas no artigo 16 da referida
lei:

                    </Text>

                    <Text style={styles.txt}>
                    I - cumprimento de obrigação legal ou regulatória pelo controlador;
                    </Text>

                    <Text style={styles.txt}>
                    II - Estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização
dos dados pessoais;
                    </Text>

                    <Text style={styles.txt}>
                    III - Transferência a terceiro, desde que respeitados os requisitos de tratamento de
dados dispostos nesta Lei;
                    </Text>

                    <Text style={styles.txt}>
                    IV - Uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que
anonimizados os dados.
                    </Text>
                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 6 - SEGURANÇA DOS DADOS PESSOAIS ARMAZENADOS
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    A plataforma se compromete a aplicar as medidas técnicas e organizativas aptas a
proteger os dados pessoais de acessos não autorizados e de situações de destruição,
perda, alteração, comunicação ou difusão de tais dados.
                    </Text>
                    
                    <Text style={styles.txt}>
                    A plataforma não se exime de responsabilidade por culpa exclusiva de terceiros, como
em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário, como no
caso em que ele mesmo transfere seus dados a terceiros. O site se compromete a
comunicar o usuário em caso de alguma violação de segurança dos seus dados
pessoais.
                    </Text>

                    <Text style={styles.txt}>
                    Os dados pessoais armazenados são tratados com confidencialidade, dentro dos
limites legais. No entanto, podemos divulgar suas informações pessoais caso sejamos
obrigados pela lei para fazê-lo ou se você violar nossos Termos de Serviço.
                    </Text>
                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 7 - COMPARTILHAMENTO DOS DADOS
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    O compartilhamento de dados do usuário ocorre apenas com os dados referentes a
publicações realizadas pelo próprio usuário, tais ações são compartilhadas
publicamente com os outros usuários.

                    </Text>
                    
                    <Text style={styles.txt}>
                    Os dados do perfil do usuário são compartilhados dentro da plataforma.
                    </Text>

                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 8 - OS DADOS PESSOAIS ARMAZENADOS SERÃO TRANSFERIDOS A
TERCEIROS?
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Os dados pessoais não podem ser compartilhados com terceiros.
                    </Text>
                    
                    <Text style={styles.txt}>
                    Ao acessar nossos serviços e prover suas informações, você está consentindo o
processamento, transferência e armazenamento desta informação.
                    </Text>

                    <Text style={styles.txt}>
                    Ao ser redirecionado para um aplicativo ou site de terceiros, você não será mais regido
por essa Política de Privacidade ou pelos Termos de Serviço da nossa plataforma.
Não somos responsáveis pelas práticas de privacidade de outros sites e lhe
incentivamos a ler as declarações de privacidade deles.
                    </Text>
                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 9 – COOKIES OU DADOS DE NAVEGAÇÃO
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Os cookies referem-se a arquivos de texto enviados pelo aplicativo ao dispositivo do
usuário e que nele ficam armazenados, com informações relacionadas à navegação
no aplicativo. Tais informações são relacionadas aos dados de acesso como local e
horário de acesso e são armazenadas no dispositivo do usuário para que o servidor
do aplicativo possa lê-las posteriormente a fim de personalizar os serviços do
aplicativo.

                    </Text>
                    
                    <Text style={styles.txt}>
                    O usuário do aplicativo ConnTec manifesta conhecer e aceitar que pode ser utilizado
um sistema de coleta de dados de navegação mediante à utilização de cookies.
                    </Text>

                    <Text style={styles.txt}>
                    O cookie persistente permanece no dispositivo do usuário depois que o aplicativo é
fechado e será usado pelo aplicativo em visitas subsequentes à ele. Os cookies
persistentes podem ser removidos seguindo as instruções do seu dispositivo. Já o
cookie de sessão é temporário e desaparece depois que o aplicativo é fechado.
                    </Text>
                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 10 - CONSENTIMENTO
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Ao utilizar os serviços e fornecer as informações pessoais na plataforma, o usuário
está consentindo com a presente Política de Privacidade.
                    </Text>
                    
                    <Text style={styles.txt}>
                    O usuário, ao cadastrar-se, manifesta conhecer e pode exercitar seus direitos de
cancelar seu cadastro, acessar e atualizar seus dados pessoais e garante a
veracidade das informações por ele disponibilizadas.
                    </Text>

                    <Text style={styles.txt}>
                    O usuário tem direito de retirar o seu consentimento a qualquer tempo, para tanto deve
entrar em contato através do e-mail conntec.suporte@conntec.com

                    </Text>
                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 11 - ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Reservamos o direito de modificar essa Política de Privacidade a qualquer momento,
então, é recomendável que o usuário a revise com frequência.
                    </Text>
                    
                    <Text style={styles.txt}>
                    As alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação
na plataforma. Quando realizadas alterações os usuários serão notificados. Ao utilizar
o serviço ou fornecer informações pessoais após eventuais modificações, o usuário
demonstra sua concordância com as novas normas.
                    </Text>

                    <Text style={styles.txt}>
                    Diante da fusão ou venda da plataforma à outra empresa os dados dos usuários
podem ser transferidos para os novos proprietários para que haja permanência dos
serviços oferecidos.
                    </Text>
                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    SEÇÃO 12 – JURISDIÇÃO PARA RESOLUÇÃO DE CONFLITOS
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Para a solução de controvérsias decorrentes do presente instrumento será aplicado
integralmente o Direito brasileiro.
                    </Text>
                    
                    <Text style={styles.txt}>
                    Os eventuais litígios deverão ser apresentados no foro da comarca em que se
encontra a sede da empresa.
                    </Text>

                </View>

            </View>
        </ScrollView>    
    </SafeAreaView>   
  );
}

const styles = StyleSheet.create({
  container: {
    //container principal
    flex: 1,
  },

  containerTitle:{
    alignItems:"center",
    alignSelf:"center",
    marginTop:55,
    width: '90%'
  },

  txtTitulo:{
    fontFamily: "HelveticaNeue",
    color: "#b20000",
    fontSize:30, 
    fontWeight:"bold"
  },

  containerTxt:{
    alignSelf:"center",
    alignItems:"center",
    marginTop:30,
    width:'90%'
  },

  txt:{
    fontFamily: "HelveticaNeue",
    color: "gray",
    fontSize:19,
    marginTop:10
  },

  containerSubtitle:{
    alignItems:"center",
    alignSelf:"center",
    marginTop:30,
    width:"90%",
    
  },

  txtSubtitulo:{
    fontFamily: "HelveticaNeue",
    color: "#000",
    fontSize:24, 
    fontWeight:"bold"
  },

});
