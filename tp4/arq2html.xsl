<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    
    version="1.0">
    
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>
    
    
    <xsl:template match="ARQELEM"><html>
    <head>
        <title>Arqueossítio</title>
        <meta charset="UTF8" />
    </head>

        <h1 align="center"><xsl:value-of select="IDENTI"/></h1>
        <h2>Arqueossítio do concelho de <xsl:value-of select="CONCEL"/></h2>
        <table style="width:100%">
        <xsl:if test="IMAGEM">
                        <xsl:apply-templates select="IMAGEM"/>
            </xsl:if>
             <xsl:if test="CRONO">
                        <tr>
                            <th>Cronologia</th>
                            <td>
                                <xsl:value-of select="CRONO"/>
                            </td>
                        </tr>
                    </xsl:if>
                    <tr>
                        <th>Descrição</th>
                        <td>
                            <xsl:value-of select="DESCRI"/>
                        </td>
                    </tr>
                     <xsl:if test="LUGAR">
                        <tr>
                            <th>Lugar</th>
                            <td>
                                <xsl:value-of select="LUGAR"/>
                            </td>
                        </tr>
                    </xsl:if>
                     <tr>
                        <th>Freguesia</th>
                        <td>
                            <xsl:value-of select="FREGUE"/>
                        </td>
                    </tr>
                    <tr class="w3-hover-orange">
                        <th>Concelho</th>
                        <td>
                            <xsl:value-of select="CONCEL"/>
                        </td>
                    </tr>
                    <xsl:if test="CODADM">
                        <tr class="w3-hover-yellow">
                            <th>Código Administrativo</th>
                            <td>
                                <xsl:value-of select="CODADM"/>
                            </td>
                        </tr>
                    </xsl:if>
                    <xsl:if test="LATITU">
                        <tr>
                            <th>Latitude</th>
                            <td>
                                <xsl:value-of select="LATITU"/>
                            </td>
                        </tr>
                    </xsl:if>
                    <xsl:if test="LONGIT">
                        <tr>
                            <th>Longitude</th>
                            <td>
                                <xsl:value-of select="LONGIT"/>
                            </td>
                        </tr>
                    </xsl:if>
                    <tr>
                        <th>Altitude</th>
                        <td>
                            <xsl:value-of select="ALTITU"/>
                        </td>
                    </tr>
        </table>
         <xsl:if test="ACESSO">
                        <p>
                            <b>Acesso: </b>
                            <xsl:value-of select="ACESSO"/>
                        </p>
                    </xsl:if>
                    <xsl:if test="QUADRO">
                        <p>
                            <b>Quadro físico: </b>
                            <xsl:value-of select="QUADRO"/>
                        </p>
                    </xsl:if>
                    <p>
                        <b>Descrição arqueológica: </b>
                        <xsl:value-of select="DESARQ"/>
                    </p>
                    <xsl:if test="INTERP">
                        <p>
                            <b>Interpretação: </b>
                            <xsl:value-of select="INTERP"/>
                        </p>
                    </xsl:if>
                    <xsl:if test="DEPOSI">
                        <p>
                            <b>Depósito: </b>
                            <xsl:value-of select="DEPOSI"/>
                        </p>
                    </xsl:if>
                    <xsl:if test="INTERE">
                        <p>
                            <b>Interesse: </b>
                            <xsl:value-of select="INTERE"/>
                        </p>
                    </xsl:if>
                    <xsl:if test="BIBLIO">
                        <b>Bibliografia:</b>
                        <ul>
                            <xsl:for-each select="BIBLIO">
                                <li>
                                    <xsl:value-of select="."/>
                                </li>
                            </xsl:for-each>
                        </ul>
                    </xsl:if>
                     <xsl:if test="AUTOR">
                        <p>
                            <b>Autor: </b>
                            <xsl:value-of select="AUTOR"/>
                        </p>
                    </xsl:if>

                    <p>
                        <b>Data</b>
                        <xsl:value-of select="DATA"/>
                    </p>
       <!-- <p><xsl:apply-templates/></p> -->
        </html>
    </xsl:template>
     <xsl:template match="IMAGEM">
        <tr>
            <th>Imagem</th>
            <td>
                <a href="{@NOME}">
                    <i>
                        <xsl:value-of select="@NOME"/>
                    </i>
                </a>
            </td>
        </tr>
    </xsl:template>
</xsl:stylesheet>