export default function Section(props) {
    return (
        <>
            <section>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam repudiandae, minima iusto dicta eaque excepturi distinctio omnis voluptas, sapiente consectetur est fugit deleniti blanditiis, laudantium odio error minus? Ullam!</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam repudiandae, minima iusto dicta eaque excepturi distinctio omnis voluptas, sapiente consectetur est fugit deleniti blanditiis, laudantium odio error minus? Ullam!</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam repudiandae, minima iusto dicta eaque excepturi distinctio omnis voluptas, sapiente consectetur est fugit deleniti blanditiis, laudantium odio error minus? Ullam!</p>
                    <p>{props.novoProps}</p>
                </div>
                <div>
                    <img src={props.uriLogoReact} alt={props.altLogoReact} />
                </div>

            </section>
        </>
    )
}