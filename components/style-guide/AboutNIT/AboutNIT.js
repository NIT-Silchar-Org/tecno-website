import React from 'react'
import style from "../AboutNIT/AboutNITStyle.module.scss"

export default function AboutNIT() {
    return (
        <div className={style.main}>
            <div className={style.section}>
                <h1 className={style.heading}>
                    ABOUT NIT SILCHAR
                </h1>
                <p className={style.para}>
                    A bright future requires a bright start. NITS abides by this mantra.
                    The institute believes in equipping students with the knowledge and
                    skills in their chosen streams, inculcate values, identify hidden
                    talents, and provide opportunities for students to realize their full
                    potential. It facilitates the requisite support and encouragement via
                    various cultural and academic activities to shape the body and soul.
                    It has transformed into a sought out centre of learning.{' '}
                </p>
            </div>
        </div>
    )
}
