import Link from 'next/link'

function Button(props) {
  return (
    <>
    <Link style={{background: "linear-gradient(90.43deg, #E16C12 3.69%, #8E440C 59.05%)"}} href="https://calendly.com/mtsn" target={"blank"} role="button" tabindex="0" className="btn btn-lg text-decoration-none text-white position-relative at-zindex3">
        {props.btntitle}
        </Link>
    </>
  )
}

export default Button