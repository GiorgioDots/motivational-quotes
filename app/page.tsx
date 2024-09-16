import { Suspense } from "react";
import { Loading } from "./ui/loading";
import { Quote } from "./ui/quote";


export default async function Home() {
    return (
        <Suspense fallback={<Loading></Loading>}>
            <Quote></Quote>
        </Suspense>
    );
}
