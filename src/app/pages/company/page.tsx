import React from "react";

import {companyImage} from "../../components/images/imagesSlides"
import { Carrousel } from "../../components/layout/carousel";

export default function Company() {
    return (
        <main className="w-screen h-screen flex text-black">
            <div className="max-w-[1000px] p-2 m-auto">
                <div>
                    <h1 className="text-yellowButton text-3xl font-semibold">
                        Música e comida de qualidade
                    </h1>

                    <p className="mt-2 text-justify font-extrabold">
                        O Cabeças Bar é um local modesto que busca trazer o sabor autêntico do Nordeste brasileiro em um ambiente descontraído, com uma decoração minimalista. O foco principal está nos pratos e nas bebidas oferecidos aos clientes.

                        No cardápio do Cabeças Bar, você encontrará uma seleção de pratos típicos do Nordeste, como a famosa rabada, carne seca, buchada, feijoada, entre outros. Os pratos são preparados com ingredientes frescos e seguindo as receitas tradicionais da região, garantindo sabores marcantes e genuínos.

                        O bar do Cabeças Bar oferece uma variedade de bebidas, incluindo cervejas geladas, sucos e, é claro, a cachaça, que é uma das bebidas mais apreciadas no Nordeste.

                        A atmosfera no Cabeças Bar é amigável e despretensiosa, com um espaço acolhedor e uma equipe simpática pronta para atender os clientes. O objetivo é proporcionar um ambiente relaxante, onde as pessoas possam desfrutar de boa comida, bebida e, se quiserem, até mesmo bater um papo descontraído com os amigos.

                        Embora a decoração seja simples, o Cabeças Bar valoriza a cultura nordestina através da música ambiente, que pode apresentar uma seleção de forró, xote e outros ritmos característicos da região.
                    </p>
                </div>

                <div className="h-[500px] w-full mt-8">
                    <Carrousel/>
                </div>
            </div>
        </main>
    )
}