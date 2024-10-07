"use client"

import { useEffect } from "react"

export default function TestPage() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/forms/d/e/1FAIpQLSdiiOaso_9idAARO2Zd8tL8K9qGM3DSyTvZD8bW13GR0VjnZg/viewform"
    )
  }, [])

  return true
}
