import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    <div className="m-12">
    <hr className="my-4" />
    <h3>Primary Color</h3>
    <div className="flex flex-row gap-4 justify-start mb-6">
        <Button className="bg-primary-900 p-6 text-white hover:bg-primary-900">Primary-900 - #42307D</Button>
        <Button className="bg-primary-800 p-6 text-white hover:bg-primary-800">Primary-800 - #53389E</Button>
        <Button className="bg-primary-700 p-6 text-white hover:bg-primary-700">Primary-700 - #6941C6</Button>
        <Button className="bg-primary-600 p-6 text-white hover:bg-primary-600">Primary-600 - #7F56D9</Button>
        <Button className="bg-primary-500 p-6 text-white hover:bg-primary-500">Primary-500 - #9E77ED</Button>
        <Button className="bg-primary-400 p-6 text-white hover:bg-primary-400">Primary-400 - #B692F6</Button>
        <Button className="bg-primary-300 p-6 text-black hover:bg-primary-300">Primary-300 - #D6BBFB</Button>
        <Button className="bg-primary-200 p-6 text-black hover:bg-primary-200">Primary-200 - #E9D7FE</Button>
        <Button className="bg-primary-100 p-6 text-black hover:bg-primary-100">Primary-100 - #F4EBFF</Button>
        <Button className="bg-primary-50 p-6 text-black hover:bg-primary-50">Primary-50 - #F9F5FF</Button>
        <Button className="bg-primary-25 p-6 text-black hover:bg-primary-25">Primary-25 - #FCFAFF</Button>
    </div>
    <hr className="my-4" />
    <h3>Event Colors</h3>
    <div className="flex flex-row gap-4 mb-6">
        <Button className="bg-error p-6 text-white">Error - #F04438</Button>
        <Button className="bg-warning p-6 text-white">Warning - #F79009</Button>
        <Button className="bg-caution p-6 text-white">Caution - #FEC848</Button>
        <Button className="bg-success-500 p-6 text-white">Success-500 - #12B76A</Button>
    </div>
    <hr className="my-4" />
    <h3>Button Colors</h3>
    <div className="flex flex-row gap-4 mb-6">
        <Button className="bg-button-25 hover:bg-button-25">
            Button-25 - #FCFCFD
        </Button>
        <Button className="bg-button-50 hover:bg-button-50">
            Button-50 - #F8F9FC
        </Button>
        <Button className="bg-button-100 hover:bg-button-100">
            Button-100 - #EAECF5
        </Button>
    </div>
    <hr className="my-4" />
    <h3>Gradient Colors</h3>
    <div className="w-[150px] h-[150px] bg-[image:var(--gradient-primary-600)] hover:opacity-90 flex items-center text-white justify-center">
        Gradient-600 - #7F56D9
    </div>
    </div>
   
    </>

  );
}
