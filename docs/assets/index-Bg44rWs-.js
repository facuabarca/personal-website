(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".gradient-background");document.addEventListener("mousemove",e=>{const{clientX:t,clientY:o}=e;i.style.background=`radial-gradient(600px at ${t}px ${o}px, rgba(41, 44, 50, 1), transparent 80%)`});const n=document.querySelectorAll("main#content section"),c=document.querySelectorAll(".nav ul li a"),r=document.getElementById("scroll-container");r.addEventListener("scroll",function(){var e="";r.scrollTop===0||r.scrollTop<100?e=n[0].getAttribute("id"):n.forEach(t=>{const o=t.offsetTop-r.offsetTop;r.scrollTop>=o-100&&(e=t.getAttribute("id"))}),c.forEach(t=>{t.classList.remove("active"),t.getAttribute("href").includes(e)&&t.classList.add("active")})})});