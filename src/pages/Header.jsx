import React, { useState } from "react";
import Navbar from '../components/Navbar';
import MyPersonal from "../components/MyPersonal";
import { motion } from "framer-motion";
import PhraseAndSkills from '../components/phraseAndSkills'
import { useTranslation } from "react-i18next";
//css
import '../styles/index.css'

const Header = () => {

    const [t, i18n] = useTranslation("global")
    const [choose, setChoose] = useState(true)

    const onclickChoose = () => {
        i18n.changeLanguage("en")
        setChoose(prevState => !prevState)
    }
    const onclickChooseSpanish = () => {
        i18n.changeLanguage("es")
        setChoose(prevState => !prevState)
    }

    return (
        <div className="page">
            <div className="container-1">
                <a name="UP" href="none">.</a>
                <Navbar
                    t={t} />

                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2.3,
                        ease: "easeInOut",
                        delay: 4,
                        type: "spring"
                    }}

                >{t("presents.me")}</motion.h1>
                <motion.h2
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 3,
                        ease: "easeOut",
                        delay: 4,
                        type: "spring"
                    }}
                >
                    Frontend developer</motion.h2>
                {choose && (
                    <motion.div className="container-buttonsl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                            delay: 6,
                            type: "spring"
                        }}
                    >
                        <div className="buttonsl">
                            <div className="con-h3">
                                <h3>{t("presents.select")}</h3>
                            </div>
                            <button
                                onClick={onclickChoose}
                            >
                                English
                            </button>
                            <button
                                onClick={onclickChooseSpanish}
                            >
                                Español
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
            {!choose && (
                <>
                    <a name="my" href="none">{ }</a>
                    <div className="container-2">
                        <MyPersonal
                            t={t}
                        />
                    </div>
                    <div className="container-3">
                        <PhraseAndSkills
                            t={t}
                        />
                    </div>
                </>
            )}
        </div >
    )
}
export default Header;
