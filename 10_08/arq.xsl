<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    
    <xsl:output method="xhtml" encoding="UTF-8" indent="yes"></xsl:output>
    
    <xsl:template match="/">
        <xsl:result-document href="arqweb/index.html">
            <html>
                <head>
                    <title>Arqueossítios</title>
                    <meta charset="UTF-8"></meta>
                </head>
                <body>
                    <h1>Arqueossítios do NW Português</h1>
                    <h3>Índice por concelhos</h3>
                    <ul>
                        <xsl:apply-templates select="ARQSITS/ARQELEM">
                            <xsl:sort select="normalize-space(CONCEL)"></xsl:sort>
                        </xsl:apply-templates>
                    </ul>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="ARQELEM[not(preceding::CONCEL=./CONCEL)]">
        <li>
            <xsl:value-of select="CONCEL"/>
        </li>
    </xsl:template>
    
    <xsl:template match="text()" priority="-1">
        
    </xsl:template>
    
    
</xsl:stylesheet>