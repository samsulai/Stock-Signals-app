'use client'
import React, { useRef, memo } from 'react';
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
interface TradingViewWidgetProps {
    title?: string;
    scriptUrl: string;
    config: Record<string, unknown>;
    height?: number;
    className?: string;
}

const  TradingViewWidget = ({ title, scriptUrl, config, height = 600, className }: TradingViewWidgetProps) => {
    const container = useTradingViewWidget(scriptUrl, config, height);



    return (
        <div className="w-full">
            {title && <h2 className="mb-4 text-lg font-medium text-white">{title}</h2>}
                <div className="cn('tradingview-widget-container', className)" ref={container} style={{height: "100%", width: "100%"}}>
                    <div className="tradingview-widget-container__widget"
                         style={{height: "calc(100% - 32px)", width: "100%"}}></div>
                    <div className="tradingview-widget-copyright"><a
                        href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener nofollow" target="_blank"><span
                        className="blue-text">AAPL stock chart</span></a><span
                        className="trademark"> by TradingView</span></div>
                </div>

        </div>
    );
}

export default memo(TradingViewWidget);
