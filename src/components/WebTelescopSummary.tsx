const ytVideoWebb ="https://www.youtube.com/embed/1C_zuHf6lP4?autoplay=1&mute=1&loop=1&playlist=1C_zuHf6lP4"
const WebTelescopSummary = () => {
  return (
    <div>
        <iframe src={ytVideoWebb} height={'100%'} width={'100%'} allow="autoplay"  className="min-h-[500px] rounded-lg" >

        </iframe>
    </div>
  )
}

export default WebTelescopSummary