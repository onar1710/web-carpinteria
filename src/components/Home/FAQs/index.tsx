import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-10 ">
                    <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/categories/ferrary-cucina-carpinteria%20(40).jpeg"
                            alt='image'
                            width={680}
                            height={644}
                            className='lg:w-full'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-12'>
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary " />
                            FAQs
                        </p>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white'>
                            Preguntas frecuentes
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 pr-20'>
                            Resolvemos dudas comunes sobre cocinas, clósets y carpintería a medida para que puedas cotizar con claridad.
                        </p>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. ¿Cuántos años de experiencia tienen?</AccordionTrigger>
                                    <AccordionContent>
                                        Contamos con 25 años de experiencia realizando trabajos de carpintería, remodelación y acabados.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. ¿Cuánto tiempo toma realizar un trabajo?</AccordionTrigger>
                                    <AccordionContent>
                                        El tiempo varía según el proyecto. Una  obra mayormente para un apartamento se tarda de 30 a 40 dias con la mejor calidad y mejores materiales del mercado siempre evaluando sus necesidades.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. ¿Cuál es el precio mínimo? ¿Tienen promociones?</AccordionTrigger>
                                    <AccordionContent>
                                        Los precios dependen del tipo de trabajo y los materiales. Contáctanos para una cotización personalizada y conocer nuestras promociones vigentes (nos adaptamos al presupuesto de nuestros clientes).
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. ¿Garantizan la calidad de los trabajos?</AccordionTrigger>
                                    <AccordionContent>
                                        Sí, garantizamos calidad en todos nuestros trabajos terminados. Nuestra experiencia de 25 años en el mercado nos respaldan abiertamente, nuestro compromiso y seriedad en cada trabajo nos colocan como lider indiscutible.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>5. ¿Qué materiales utilizan?</AccordionTrigger>
                                    <AccordionContent>
                                        Trabajamos con materiales de primera calidad y acabados modernos según las necesidades de cada proyecto: Vesto, Arauco, Primadera, Duratex, maderas selectas, MDF y herrajes de calidad, entre otros.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger>6. ¿Tienen diseños o catálogos para mostrar?</AccordionTrigger>
                                    <AccordionContent>
                                        Sí, contamos con portafolio de trabajos realizados, catálogos y fotos de referencia que puedes revisar antes de decidir.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
